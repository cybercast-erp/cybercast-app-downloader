# Cybercast APK Self-Update Page

A single self-contained HTML page (`index.html`) that upgrades the `com.cybercast` player app on legacy Cybercast signage devices. It is designed to be pushed to devices as a **web element in a campaign** and rendered inside the Cybercast Android WebView (Chrome 39-era engine — all code is strict ES5, XHR only).

## How it works

1. The page loads two external scripts: jQuery 1.11.3 from `https://code.jquery.com/jquery-1.11.3.min.js` (the same URL/version cybdevice itself falls back to; if it fails, cybdevice self-loads jQuery) and the device bridge from `https://my.cybercast.com.au/js/device/cybdevice.2.2.1.js`. If the bridge script fails to load (offline, 404), the page shows a message and reloads itself every 30s until it succeeds. It then waits for `Device.ready`.
2. It calls `POST https://app.cybercast.com.au/api/device/v1/apk/download` with `{"packageName": "com.cybercast"}`, which returns the latest version number and a presigned S3 download URL (valid 1 hour, no auth required).
3. It compares the device's installed version (`Device.info.app_ver_code`) against the latest:
   - **Already up to date** → shows "Up to date" and silently re-checks every **6 hours** (the page can be left up indefinitely).
   - **Behind** → calls `Device.installApk({package, url, apk_version, auto_run: true}, …)`. The Android side downloads and installs the APK, then relaunches the app.
4. **Any failure** (API unreachable, download/install error, or no install callback within a 15-minute watchdog) is logged via `Device.logError` and retried **forever** with capped exponential backoff: 30s → 60s → 120s → 240s → 300s (max). A fresh presigned URL is fetched on every attempt.

## URL parameters

| Param | Effect |
|-------|--------|
| `?manual=1` | No auto-install. When an update is available an **Install update** button is shown; a technician taps it to install. (Tapping re-fetches a fresh download URL first.) |

## On-screen UI

Minimal, public-presentable dark status screen: state text ("Checking for updates…", "Downloading & installing update…", "Up to date (vN)", "Retrying in Ns…"), plus a small corner line for technicians: `installed vX · latest vY · <device name>`.

When opened outside a device (desktop browser), cybdevice's simulate mode kicks in: the page runs the real version check against the live API but never calls `installApk`, and shows a "simulation mode" marker bottom-left.

## Deployment

Host `index.html` anywhere (S3, `client.cybercast.com.au`, or a local device path) and point a campaign web element at it. No sibling files needed.

## Rebuilding

`index.html` has one inline script — the updater app logic — plus the two external references above. To change updater logic, edit the last `<script>` block in `index.html` directly — keep it **ES5-only** (no `let`/`const`, arrow functions, template literals, `fetch`, or Promises) and re-verify with:

```bash
npx es-check es5 <extracted-script.js>
```

## Verified

- ES5 compliance of the inline updater script (`es-check es5`).
- Live API: returns 200 with presigned URL, CORS open (`Access-Control-Allow-Origin: *`, `Origin: null` accepted — works from `file://`).
- Browser run (simulate mode): update-available path, manual-mode button, retry/backoff path, and bridge-load-failure guard all exercised; final end-to-end run used the real hosts (code.jquery.com, my.cybercast.com.au, live API) with no mocks.
- Real-device install: verify by side-loading or pushing via a campaign to a test device running an old player version.
