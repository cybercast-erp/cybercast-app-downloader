# Cybercast APK Self-Update Page

A single self-contained HTML page (`index.html`) that upgrades the `com.cybercast` player app on legacy Cybercast signage devices. It is designed to be pushed to devices as a **web element in a campaign** and rendered inside the Cybercast Android WebView (Chrome 39-era engine — all code is strict ES5, XHR only).

## How it works

1. The page loads two external scripts: jQuery 1.11.3 from `https://code.jquery.com/jquery-1.11.3.min.js` (the same URL/version cybdevice itself falls back to; if it fails, cybdevice self-loads jQuery) and the device bridge from `cybdevice.2.2.1.js` — this repo's copy, referenced relatively, so it must be deployed as a sibling of `index.html`. If the bridge script fails to load (offline, 404), the page shows a message and reloads itself every 30s until it succeeds. It then waits for `Device.ready`.
2. It compares the device's installed version (`Device.info.app_ver_code`) against the **pinned target version (3155)**:
   - **Already at or above 3155** → shows "Up to date" and silently re-checks every **6 hours** (the page can be left up indefinitely).
   - **Behind** → calls `Device.installApk({package, url, apk_version, auto_run: true, use_service: true}, …)` with the **static APK URL** `https://media-manager-bucket-dev.s3.ap-southeast-2.amazonaws.com/com.cybercast-3155.apk`. The Android side downloads and installs the APK, then relaunches the app.
3. The player reports progress (`downloading`, `downloaded`) through the same bridge callback as failures — the page treats those as progress (updating the status text and re-arming the watchdog), **not** as failures. Only real failure statuses (`failed download`, `failed Install`, …) trigger a retry; late callbacks from a superseded attempt are ignored.
4. **Any real failure** (download/install error, or no callback within a 15-minute watchdog since the last progress event) is logged via `Device.logError` and retried **forever** with capped exponential backoff: 30s → 60s → 120s → 240s → 300s (max).

### Why a pinned static URL instead of the download API

The legacy player derives the local filename from everything after the last `/` in the download URL (`UpdaterPackageThread.java`: `new File(downloadUrl).getName()`). The device API's presigned S3 URLs carry a ~1.5KB query string, blowing past the 255-byte Linux filename limit — **every download fails** with "Failed to download an APK file". The URL must therefore be static and query-less. The version is pinned to match the URL (using the API's "latest" version with a fixed 3155 APK would loop forever once a newer version is released). Once on v3155 the new player self-updates. To ship a newer APK via this page, upload it to the bucket and bump `APK_URL` + `APK_VERSION` in `index.html`.

### Silent vs prompted install

A WebView-initiated install is only **silent** when something on the device holds the system permission `INSTALL_PACKAGES`:

- If the privileged companion app **`com.cybercast.service`** is installed, the player delegates the install to it (the page passes `use_service: true` to make this explicit) and no Android prompt appears. The page gets no progress callbacks on this path — it waits until the app restarts, or the 15-minute watchdog retries.
- If the service app is absent (and the player itself isn't a platform-signed/priv-app on that firmware), Android **always shows the install confirmation prompt** — nothing the page can do avoids it. Options: accept the prompt once (after v3155 the new player manages its own updates), or `adb install -r` the APK directly.

On load the page probes for `com.cybercast.service` and reports the result in the log panel ("present" / "NOT detected").

## URL parameters

| Param | Effect |
|-------|--------|
| `?manual=1` | No auto-install. When an update is available an **Install update** button is shown; a technician taps it to install. |
| `?debug=1` | Shows an on-screen log panel (timestamped, last 200 lines) at the bottom of the page — for devices where the browser console is unreachable. The panel also **auto-appears on any error** (install failure, retry, JS error) even without the param. |

## On-screen UI

Minimal, public-presentable status screen in the CybercastNext app theme (PairEmptyScreen background: diagonal blue gradient `#bfdbfe → #e0f2fe → #c7d2fe` with dot-grid overlay, Cybercast blue `#00bce4` accents, embedded Cybercast PRO logo as a base64 data URI): state text ("Checking for updates…", "Downloading & installing update…", "Up to date (vN)", "Retrying in Ns…"), plus a small corner line for technicians: `installed vX · latest vY · <device name>`.

When opened outside a device (desktop browser), cybdevice's simulate mode kicks in: the page runs the real version check against the live API but never calls `installApk`, and shows a "simulation mode" marker bottom-left.

## Deployment

Host `index.html` **and** `cybdevice.2.2.1.js` together in the same directory (S3, `client.cybercast.com.au`, or a local device path) and point a campaign web element at `index.html` — the bridge script is referenced relatively.

## Rebuilding

`index.html` has one inline script — the updater app logic — plus the external jQuery reference and the sibling `cybdevice.2.2.1.js`. To change updater logic, edit the last `<script>` block in `index.html` directly — keep it **ES5-only** (no `let`/`const`, arrow functions, template literals, `fetch`, or Promises) and re-verify with:

```bash
npx es-check es5 <extracted-script.js>
```

## Verified

- ES5 compliance of the inline updater script (`es-check es5`).
- Live API: returns 200 with presigned URL, CORS open (`Access-Control-Allow-Origin: *`, `Origin: null` accepted — works from `file://`).
- Browser run (simulate mode): update-available path, manual-mode button, retry/backoff path, and bridge-load-failure guard all exercised; final end-to-end run used live code.jquery.com, the sibling cybdevice file, and the live API with no mocks.
- Real-device install: verify by side-loading or pushing via a campaign to a test device running an old player version.
