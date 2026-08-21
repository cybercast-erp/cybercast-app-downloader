var Device = 
{
	version: 221,
	supported_version: 2651,
	enableLog: true,
	enableLogShowLine: false,
	enablePostRequest: false,
	isRunning: null,
	cacheMode: false,
	lastLog: null,
	simulate: {
		deviceInfo:'{"params":"{}","device_mac":"60:D3:0A:01:E0:72","platform_ver":"4.2.1","lock_channel":"1","local_path":"file:///data/data/com.cybercast/cybercast/elements/","element_path":"/data/data/com.cybercast/cybercast/elements/","turn_device_off_minute":"0","element_height":"1065","device_model":"SONIQ_70","allow_USB":"false","timezone":"Australia/Melbourne","username":"vey","rotation":"0","platform":"Android","enable_screenshot":"false","device_rotation":"0","campaign_name":"etg flapper [Copy]","app_ver_code":"2040","group_id":"638","auto_signin":"1","turn_device_on_hour":"0","device_time":"2018-09-03 11:33:28","system_time":"2018-09-03 11:33:28","element_id":"17443","user_name":"vey","storage_path":"/mnt/sdcard","watermark_position":"null","app_ver":"2.4.0","display_watermark":"0","app_name":"com.cybercast","default_channel_name":"","device_name":"SONIQ_70_2192","element_width":"1920","turn_device_off_hour":"0","user_id":"418","user_template_id":"8637","turn_on_device":"0","device_width":"1920","device_height":"1080","system_settings":"{\\"cybercast_angle\\":-1}","group_name":"test","device_manufacturer":"MStar Semiconductor, Inc.","source_list_id":"154203","device_time_zone_long":"Australian Eastern Standard Time","turn_device_on_minute":"0","device_language":"en_US","device_id":"2192","device_online":"1","lan_ip":"10.0.4.102","usb_override":"0","mac_address":"60:D3:0A:01:E0:72","app_sig":"-1263674583","turn_off_device":"0","capture_frame":"false","contract_end_date":"2020-03-03 23:59:59","network_connected":"1","server":"http://cybercast.com.au","enable_debug":"true","channel":"null","device_time_zone":"AEST"}',
		campaignData:'{}',
		//campaignData:'{"template_id":"98","user_template_id":"22185","user_id":"456","user_template_name":"TEST - Camera CYB","duration":"10000","layer":"0","panic_campaign":"0","require_schedule":"1","modified_time":"2020-08-13 03:22:46","template_name":"General 015","width":"1280","height":"720","target_layout":"0","category":"1","elements":[{"position_id":"485","x":"0","y":"0","w":"1280","h":"720","layer":"0","element_type":"image","default_source_id":"0","selectable":"1","template_id":"98","alias":"485","element_id":"35615","duration":"0","type":"image","user_template_id":"22185","param_pos":null,"element_setting":{},"sources":[]},{"position_id":"486","x":"10","y":"10","w":"610","h":"610","layer":"4","element_type":"text","default_source_id":"0","selectable":"1","template_id":"98","alias":"486","element_id":"35616","duration":"0","type":"text","user_template_id":"22185","param_pos":null,"element_setting":{},"sources":[{"source_id":"0","source_list_id":"364087","element_id":"35616","order":"0","duration_override":"0","param_source":[{"duration":-1,"weblocal":true,"type":"web","url":"local","webbody":""}],"type":"web","duration":null,"width":null,"height":null,"rotate_left":null,"rotate_right":null,"rotate_down":null,"size":null,"name":null,"save_name":null,"thumb":null,"status":null,"url":"http:\/\/cybercast-sydney.s3.amazonaws.com\/tmp\/hdms\/sources\/","is_remote":null,"user_id":null,"modified_time":null,"approve_by":null,"source_group_id":null,"filesize":null,"asset":["https:\/\/soniq.com\/au\/packages\/jquery\/js\/jquery.min.js","http:\/\/client.cybercast.com.au\/lib\/js\/cybdevice.2.1.2.js"]}]},{"position_id":"487","x":"630","y":"10","w":"640","h":"360","layer":"2","element_type":"video","default_source_id":"0","selectable":"1","template_id":"98","alias":"487","element_id":"35617","duration":"0","type":"video","user_template_id":"22185","param_pos":null,"element_setting":{"transition":"fade","transition_timer":2000},"sources":[{"source_id":"49895","source_list_id":"364088","element_id":"35617","order":"0","duration_override":"-1","param_source":[{"duration":-1,"delay":0,"volume":null}],"type":"external","duration":"-1","width":"0","height":"0","rotate_left":"0","rotate_right":"0","rotate_down":"0","size":"0","name":"CAMERA","save_name":"be2f9c2093c295719c2f1494d22cbe67.png","thumb":"be2f9c2093c295719c2f1494d22cbe67.png","status":null,"url":"http:\/\/cybercast-sydney.s3.amazonaws.com\/tmp\/hdms\/sources\/be2f9c2093c295719c2f1494d22cbe67.png","is_remote":"0","user_id":"0","modified_time":"2020-03-11 11:21:03","approve_by":"0","source_group_id":"1","filesize":"0","save_path":"\/data\/data\/com.cybercast\/cybercast\/elements"}]},{"position_id":"488","x":"630","y":"380","w":"640","h":"240","layer":"1","element_type":"image","default_source_id":"0","selectable":"1","template_id":"98","alias":"488","element_id":"35618","duration":"0","type":"image","user_template_id":"22185","param_pos":null,"element_setting":{"transition":"fade","transition_timer":2000},"sources":[{"source_id":"19335","source_list_id":"364089","element_id":"35618","order":"0","duration_override":"-1","param_source":[{"duration":-1,"delay":0,"volume":null}],"type":"image","duration":"-1","width":"748","height":"561","rotate_left":"0","rotate_right":"0","rotate_down":"0","size":"656096","name":"giphy9.gif","save_name":"72cfb1bdb921a1ac775dda10b5893e9e.gif","thumb":"72cfb1bdb921a1ac775dda10b5893e9e.gif","status":"1","url":"http:\/\/cybercast-sydney.s3.amazonaws.com\/tmp\/hdms\/sources\/72cfb1bdb921a1ac775dda10b5893e9e.gif","is_remote":"0","user_id":"456","modified_time":"2018-06-14 23:50:26","approve_by":"0","source_group_id":"403","filesize":"656096"}]},{"position_id":"489","x":"10","y":"630","w":"1260","h":"80","layer":"4","element_type":"text","default_source_id":"0","selectable":"1","template_id":"98","alias":"489","element_id":"35619","duration":"0","type":"text","user_template_id":"22185","param_pos":null,"element_setting":{},"sources":[]}],"schedule":"1"}',
		
        campaignData:'{"template_id":"98","user_template_id":"22185","user_id":"456","user_template_name":"TEST - Camera CYB","duration":"10000","layer":"0","panic_campaign":"0","require_schedule":"1","modified_time":"2020-08-13 03:22:46","template_name":"General 015","width":"1280","height":"720","target_layout":"0","category":"1","elements":[{"position_id":"485","x":"0","y":"0","w":"1280","h":"720","layer":"0","element_type":"image","default_source_id":"0","selectable":"1","template_id":"98","alias":"485","element_id":"35615","duration":"0","type":"image","user_template_id":"22185","param_pos":null,"element_setting":{},"sources":[]},{"position_id":"486","x":"10","y":"10","w":"610","h":"610","layer":"4","element_type":"text","default_source_id":"0","selectable":"1","template_id":"98","alias":"486","element_id":"35616","duration":"0","type":"text","user_template_id":"22185","param_pos":null,"element_setting":{},"sources":[{"source_id":"0","source_list_id":"364087","element_id":"35616","order":"0","duration_override":"0","param_source":[{"duration":-1,"weblocal":true,"type":"web","url":"local","webbody":""}],"type":"web","duration":null,"width":null,"height":null,"rotate_left":null,"rotate_right":null,"rotate_down":null,"size":null,"name":null,"save_name":null,"thumb":null,"status":null,"url":"http:\/\/cybercast-sydney.s3.amazonaws.com\/tmp\/hdms\/sources\/","is_remote":null,"user_id":null,"modified_time":null,"approve_by":null,"source_group_id":null,"filesize":null,"asset":["https:\/\/soniq.com\/au\/packages\/jquery\/js\/jquery.min.js","http:\/\/client.cybercast.com.au\/lib\/js\/cybdevice.2.1.2.js"]}]},{"position_id":"487","x":"630","y":"10","w":"640","h":"360","layer":"2","element_type":"video","default_source_id":"0","selectable":"1","template_id":"98","alias":"487","element_id":"35617","duration":"0","type":"video","user_template_id":"22185","param_pos":null,"element_setting":{"transition":"fade","transition_timer":2000},"sources":[{"source_id":"49895","source_list_id":"364088","element_id":"35617","order":"0","duration_override":"-1","param_source":[{"duration":-1,"delay":0,"volume":null}],"type":"external","duration":"-1","width":"0","height":"0","rotate_left":"0","rotate_right":"0","rotate_down":"0","size":"0","name":"CAMERA","save_name":"be2f9c2093c295719c2f1494d22cbe67.png","thumb":"be2f9c2093c295719c2f1494d22cbe67.png","status":null,"url":"http:\/\/cybercast-sydney.s3.amazonaws.com\/tmp\/hdms\/sources\/be2f9c2093c295719c2f1494d22cbe67.png","is_remote":"0","user_id":"0","modified_time":"2020-03-11 11:21:03","approve_by":"0","source_group_id":"1","filesize":"0","save_path":"\/data\/data\/com.cybercast\/cybercast\/elements"}]},{"position_id":"488","x":"630","y":"380","w":"640","h":"240","layer":"1","element_type":"image","default_source_id":"0","selectable":"1","template_id":"98","alias":"488","element_id":"35618","duration":"0","type":"image","user_template_id":"22185","param_pos":null,"element_setting":{"transition":"fade","transition_timer":2000},"sources":[{"source_id":"19335","source_list_id":"364089","element_id":"35618","order":"0","duration_override":"-1","param_source":[{"duration":-1,"delay":0,"volume":null}],"type":"image","duration":"-1","width":"748","height":"561","rotate_left":"0","rotate_right":"0","rotate_down":"0","size":"656096","name":"giphy9.gif","save_name":"72cfb1bdb921a1ac775dda10b5893e9e.gif","thumb":"72cfb1bdb921a1ac775dda10b5893e9e.gif","status":"1","url":"http:\/\/cybercast-sydney.s3.amazonaws.com\/tmp\/hdms\/sources\/72cfb1bdb921a1ac775dda10b5893e9e.gif","is_remote":"0","user_id":"456","modified_time":"2018-06-14 23:50:26","approve_by":"0","source_group_id":"403","filesize":"656096"}]},{"position_id":"489","x":"10","y":"630","w":"1260","h":"80","layer":"4","element_type":"text","default_source_id":"0","selectable":"1","template_id":"98","alias":"489","element_id":"35619","duration":"0","type":"text","user_template_id":"22185","param_pos":null,"element_setting":{},"sources":[]}],"schedule":"1"}',
		
		elementData:'{}',
		preferenceData : [],
	},
	ready: function(func){
		this.execute.onReady.push(func);
	},
	keepActive: function (isEnable){
		if(this.isDeviceRunning()){
			Android.keepActive(isEnable);
		}
    },
    isDeviceRunning: function(){
        if (this.isRunning === null)
            return true;

		return this.isRunning;
	},
	currentDate: function(){
		if (Device.info.device_time != undefined){
         	var cur = new Date().getTime();
            var dateParts = Device.info.device_time.split("-");
            var utcTime = Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2), dateParts[2].substr(3, 2), dateParts[2].substr(6, 2), dateParts[2].substr(9, 2));
            
             var deviceTime = utcTime;
             var diff_time = cur - Device.info.update_time;
             var curTime = deviceTime + diff_time;
             
             Device.execute.postData("time", JSON.stringify({data: curTime, update_time: Device.info.update_time , device_time: deviceTime, diff_time: diff_time ,time:dateParts}) , false);
             return new Date(curTime);
        }
        
        return new Date();
	},

	currentSQLDate: function(){
        return this.currentDate().toISOString().slice(0, 19).replace('T', ' ');
	},

	//requestElementData: function (func)
	requestElementData: function (element_id, func){
		if (typeof element_id === "function"){
			this.execute.onElementData.push(element_id);
		}else if (typeof func === "function") {
			this.execute.onElementData.push(func);
		}
		
		if(this.isDeviceRunning()){
			if (typeof element_id === "function")
				Android.requestElementData("Device.execute.loadElementData");
			else{
				element_id = parseInt(element_id);
				if (element_id == 0)
					Android.requestElementData("Device.execute.loadElementData");
				else
					Android.requestElementData(element_id, "Device.execute.loadElementData");
			}
		}
		else{
			if (Device.simulate.elementData !== '')
				Device.execute.loadElementData(Device.simulate.elementData);
		}
		
	},
	requestCampaignData: function (func){
		this.execute.onCampaign.push(func);

		if(this.cacheMode)
		{
			if (!!Device.storage.get("CampaignData").saved){
				Device.execute.loadCampaignData(Device.storage.get("CampaignData").saved);
				return;
			}
		}

		if(this.isDeviceRunning()){
			Android.requestCampaignData("Device.execute.loadCampaignData");
		}
		else{
			if (Device.simulate.campaignData !== '')
				Device.execute.loadCampaignData(Device.simulate.campaignData);
		}

	},

	/**
	 * requestDeviceInfo
	 * @func(jsonStr)
	 */
	requestDeviceInfo: function (func)
	{
		if(func != null){
		    this.setInfo.addInfoChangeCall(func);

			if(this.cacheMode)
			{
				if (!!Device.storage.get("DeviceInfo").saved){
					this.setInfo.notifyInfoChange(Device.storage.get("DeviceInfo").saved);
					return;
				}
			}
		}
		if (this.isDeviceRunning()){
			Android.requestDeviceInfo('Device.setInfo.notifyInfoChange');
		}
		else{
			this.setInfo.notifyInfoChange(this.simulate.deviceInfo);
		}
	},
	
	setActiveSource : function(element_id, source_index, transition_mode, duration){
		if(this.isDeviceRunning()){
			element_id = parseInt(element_id);
			source_index = parseInt(source_index);
			if (transition_mode === null)
				Android.setActiveSource(element_id, source_index);
			else{
				if (duration === null)
					duration = -1; // use default duration
				else
					duration = parseInt(duration);

				Android.setActiveSource(element_id, source_index, transition_mode, duration);
			}
		}
	},
		
	setSourceText : function(element_id, source_index, text){
		if(this.isDeviceRunning()){
			element_id = parseInt(element_id);
			Android.setSourceText(element_id, source_index, text);
		}
	},
	
	setSlideshow : function(element_id, enable){
		if(this.isDeviceRunning()){
			element_id = parseInt(element_id);
			Android.setSlideshow(element_id, enable);
		}
	},
	
	setFullScreen : function(enable){
		if(this.isDeviceRunning()){
			Android.setFullScreen(enable);
		}
	},
	
	hideElement : function(element_id, transition_mode, duration){
		if(this.isDeviceRunning()){
			element_id = parseInt(element_id);
			if (transition_mode === null)
				Android.showElement(element_id, false);
			else{
				if (duration === null)
					duration = -1; // use default duration
				else
					duration = parseInt(duration);

				Android.showElement(element_id, false, transition_mode, duration);
			}
		}			
	},
	
	showElement : function(element_id, transition_mode, duration){
		if(this.isDeviceRunning()){
			element_id = parseInt(element_id);
			if (transition_mode === null)
				Android.showElement(element_id, true);
			else{
				if (duration === null)
					duration = -1; // use default
				else
					duration = parseInt(duration);
				Android.showElement(element_id, true, transition_mode, duration);
			}
		}			
	},
	
	pauseElement : function(element_id){
		if(this.isDeviceRunning()){
			Android.pauseElement(element_id);
		}			
	},
	
	resumeElement : function(element_id){
		if(this.isDeviceRunning()){
			Android.resumeElement(element_id);
		}			
	},
	/**
	 * monitorElementStatus
	 * @param element_id
	 * @callback(element_id, index , action )
	 */
	monitorElementStatus : function(element_id, callback){
		this.execute.onElementStatus.push(callback);

		if(this.isDeviceRunning()){
			element_id = parseInt(element_id);
			Android.monitorElementStatus(element_id, "Device.execute.loadElementStatus");
		}
	},

	/**
	 * monitorTouch
	 * @callback(element_id, index)
	 */
	monitorTouch : function(callback){
		this.execute.onTouchStatus.push(callback);

		if(this.isDeviceRunning()){
			Android.monitorDeviceTouch(); //enable;
			//will trigger deviceTouched, elementTouched
		}
	},

	/**
	 * monitorNotificaion
	 * @callback(channel, payload)
	 */

	monitorNotificaion : function(callback){
		this.execute.onNotification.push(callback);

		if(this.isDeviceRunning()){
			Android.monitorNotificaion("Device.execute.loadNotificationData");
		}
	},

	/*
	@deprecated
	*/
	sendNotificaion : function(channel, msg){
		if(this.isDeviceRunning()){
			Android.sendNotificaion(channel,msg);
		}
	},

	sendNotification : function(channel, msg){
		if(this.isDeviceRunning()){
			Android.sendNotification(channel,msg);
		}			
	},

	/*
        SendInternally
		@deprecated
	*/
	sendInternalNotificaion : function(channel, msg){
		if(this.isDeviceRunning()){
			if (msg == null)
			{
				msg = channel;
				channel = "";
			}
			Android.sendInternalNotification(channel,msg);
		}
	},

	sendInternalNotification : function(channel, msg){
		if(this.isDeviceRunning()){
			if (msg == null)
			{
				msg = channel;
				channel = "";
			}
			Android.sendInternalNotification(channel,msg);
		}			
	},
	/**
	 * monitorBroadcast
	 * @callback(channel, payload)
	 */

	monitorBroadcast : function(action, callback){
		if (typeof action !== "string") return;

		this.execute.onBroadcast[action] = callback;

		if(this.isDeviceRunning()){
			Android.monitorBroadcast(action, "Device.execute.loadOnBroadcast");
		}
	},
	
	/**
	 * monitorLogging
	 */
	monitorLogs : function(callback){
		this.execute.onLogging.push(callback);

		if(this.isDeviceRunning()){
			Android.monitorLogs("Device.execute.loadOnLogging");
		}
	},

	deleteFile : function(path){
		if (typeof path !== "string") return;
		
		if(this.isDeviceRunning()){
			Android.deleteFile(path);
		}
	},	
	
	deleteDirectory : function(path){
		if (typeof path !== "string") return;
		
		if(this.isDeviceRunning()){
			Android.deleteDirectory(path);
		}
	},

	readFile : function(path, callback){
		if (typeof path !== "string") return;
		
		this.execute.onReadFile[path] = callback;

		if(this.isDeviceRunning()){
			if (Device.checkVer(2630))
			    Android.readFile(path, "Device.execute.loadOnReadFile");
			else
			    Device.execute.loadOnReadFile(path, null);
		}
	},
	
	readFileBase64 : function(path, callback){
		if (typeof path !== "string") return;
		
		this.execute.onReadFile[path] = callback;

		if(this.isDeviceRunning()){
			if (Device.checkVer(2630))
			    Android.readFileBase64(path, "Device.execute.loadOnReadFile");
			else
			    Device.execute.loadOnReadFile(path, null);
		}
	},
    checkVer : function(supported){
		return parseInt(Device.info.app_ver_code) >= supported;
	},
	triggerIntent : function(payload){
		if(this.isDeviceRunning()){
			if (typeof payload !== "string")
				payload = JSON.stringify(payload);

			if (typeof payload === "object"){
				if (payload["intent"] == undefined && payload["package_name"] == undefined){
					Device.log("No intent Action defined", true);
					return;
				}
			}

			Android.triggerIntent(payload);
		}			
    },
    
     //store the intent when trigger after the web element destory 
	triggerOnDestory : function(payload){ //function callback optional

		if(this.isDeviceRunning()){
			if (typeof payload === "function"){
				if (this.execute.onDestory.length == 0) // only to do once
					Android.triggerOnDestory("Device.execute.loadOnDestory");
				
				this.execute.onDestory.push(payload);
				return;
			}
			if (typeof payload === "string")
				payload = JSON.parse(payload);

			if (typeof payload === "object"){
				if (payload["intent"] == undefined){
					Device.log("No intent Action defined", true);
					return;
				}
				Android.triggerOnDestory(JSON.stringify(payload));
			}
		}			
    },	
    installApk : function(payload, success_callback, failed_callback){
		var payload_example= {
			package: "com.cybercast.keyboards",
			url: "http://client.cybercast.com.au/apks/cyb.keyboardv2.0.0.apk",
			apk_version: 200,
			auto_run: false
		}

		if(this.isDeviceRunning()){
			if (typeof payload === "string")
                payload = JSON.parse(payload);
                
            if (typeof payload === "object"){
				if (payload["package"] == undefined){
					Device.log("No package name defined", true);
					return;
                }
                
                var packageName = payload["package"];
                
                this.execute.onInstalled[packageName] = [success_callback, failed_callback];

                Android.installApk(JSON.stringify(payload), "Device.execute.loadOnInstallApk");
            }
        }
	},
	
    //Keep Cybercast Running in the background
    runInBackground : function(payload){
		if(this.isDeviceRunning()){
			Android.runInBackground();
		}			
	},

    //Keep Cybercast Running in the background
    runPackage : function(packageName){
        Device.triggerIntent({"package_name":packageName});
	},
	
    isPackageRunning : function(packageName){
        
    },
    setPreference : function(key, value){
        if(this.isDeviceRunning()){
			Android.setPreference(key, value);
		}else{
			Device.simulate.preferenceData[key] = value;
		}
	},

	getPreference : function(key, func, defaultVal){
	
		if (typeof key !== "string") return;
		
        defaultVal = defaultVal == null ? "" : defaultVal; 
        
		this.execute.onPreferenceData[key] = func;

		if(this.isDeviceRunning()){
			Android.getPreference(key, "Device.execute.loadPreferenceData", defaultVal);
		}else{
			if (Device.simulate.preferenceData[key] != undefined )
			    func(Device.simulate.preferenceData[key]);
			else 
			    func(defaultVal);
		}
	},
		
	camera:{
		elm_id: 0,
		src_index: 0,
		opt_setting:{
			select:"front", //front, back, external
			check_interval: 500,
			draw_face: false,
			face_position: false,
			capture_directory: '', // full android path save detected face files 0-9
			max_faces: 10,
			min_face_size: 130,
			frame_quality: 90,
			detector_enable: false,
			attach_image: false,
			resolution:"720", // HIGH, SCREEN, LOW, 480, 720, 1080
			preview: true,
			stop: false, // start(false) / stop(true) camera
			reset: false, // restart camera(true)
			send_broadcast: {
				intent:"", // broadcast action to sent to
				attach_data:true,
				result_bytes_name:"", //param name to sent jpeg image btyes array
				extras:{
					return_output_image : false // output_image_Base64
			 	}
			}
		},
		onSnapshotCallback: null,
		onDetectFaceCallback: null,

		initialize: function (elm_id){
            Device.camera.elm_id = elm_id;
            
			if (Device.camera.elm_id == 0 || !Device.isDeviceRunning()) return;
			Android.monitorElementStatus(Device.camera.elm_id, "Device.camera.responseFromDevice");
		},
		responseFromDevice: function (element_id, index, name, eventCode, data , time){
			if (element_id != Device.camera.elm_id) return;
			
			if (data.type=="CAPTURE" && Device.camera.onSnapshotCallback != null){
				Device.camera.onSnapshotCallback(data , time);
				Device.camera.onSnapshotCallback = null;
			}else if(data.type=="FACE_DETECTED" && Device.camera.onDetectFaceCallback!= null){
				Device.camera.onDetectFaceCallback(data , time);
			}
		},
		hidePreview: function (){
			if (Device.camera.elm_id == 0) return;
			
			Device.setSourceText(Device.camera.elm_id, Device.camera.src_index , JSON.stringify({preview:false}));
		},
		showPreview: function (){
			if (Device.camera.elm_id == 0) return;
			
			Device.setSourceText(Device.camera.elm_id, Device.camera.src_index , JSON.stringify({preview:true}));
		},
		monitorDetectFace: function (func, options){
			if (Device.camera.elm_id == 0) return;
			Device.camera.onDetectFaceCallback = func;
			if (options == null){
				options = {
					//detector_enable:false,
				};
			}

			if (func == null){
				options.detector_enable = false;
			}else{
				options.detector_enable = true;
			}

			Device.setSourceText(Device.camera.elm_id, Device.camera.src_index , JSON.stringify(options));
		},
		takeFrame: function (func, options){
			Device.camera.onSnapshotCallback = func;
			if (options == null){
				options = {
					detector_enable:false,
					timeout:1000,
					max_faces:5,
					attach_image:true
				};
			}

			options.type = "CAPTURE";
			options.capture_frame = true;
			if (Device.camera.elm_id == 0) return;
			
			Device.setSourceText(Device.camera.elm_id, Device.camera.src_index , JSON.stringify(options));
		},
		takePicture: function (func, options){
			Device.camera.onSnapshotCallback = func;
			if (options == null){
				options = {
					detector_enable:false,
					timeout:1000,
					max_faces:5,
					attach_image:true
				};
			}

			options.type = "CAPTURE";

			if (Device.camera.elm_id == 0) return;
			
			Device.setSourceText(Device.camera.elm_id, Device.camera.src_index , JSON.stringify(options));
		},
		configure: function (setting){
			if (!Device.isDeviceRunning() || Device.camera.elm_id == 0) return;
			
			Device.setSourceText(Device.camera.elm_id, Device.camera.src_index , JSON.stringify(setting));
		}
	},

	execute : {
		postData :function(requestName, data, enablePost){
			var enablePost = enablePost == null?true: enablePost;

			if (!enablePost) return;

			var postInfo = (Device.postInfo == undefined)?"http://client.cybercast.com.au/devices/post-data.php":Device.postInfo;
				
			$.post("http://client.cybercast.com.au/devices/post-data.php",{
				device_id: Device.info.device_id==undefined?"unknown":Device.info.device_id,
				request: requestName,
				data : data
			});
		},

		hasInitialized: false,
		onReady:[],
		loadCompleted: function (){
			if(this.hasInitialized) return;

			this.hasInitialized = true;
			if (!window.jQuery){
				if (Device.jQueryPath == undefined){
					if(this.isRunning)
						Device.jQueryPath = "file:///android_asset/js/jquery.js";
					else
						Device.jQueryPath = "https://code.jquery.com/jquery-1.11.3.min.js";
				}
				
				Device.loadScript(Device.jQueryPath, function(){
					for(var f=0; f < Device.execute.onReady.length; f++)
					{
						Device.execute.onReady[f]();
					}
				});
			}
			else{
				for(var f=0; f < Device.execute.onReady.length; f++)
				{
					Device.execute.onReady[f]();
				}
			}
		},

		onCampaign:[],
		loadCampaignData : function(strData){
			if(Device.cacheMode)
			{
				if (!Device.storage.get("CampaignData").saved){
					Device.storage.set("CampaignData" ,{saved:strData})
				}
			}
			Device.execute.postData("requestCampaignData",strData, Device.enablePostRequest);

			for(var f=0; f < this.onCampaign.length; f++)
			{
				this.onCampaign[f](strData);
			}
		},
		onElementData:[],
		loadElementData : function(strData){
			Device.execute.postData("requestElementData",strData, Device.enablePostRequest);

			for(var f=0; f < this.onElementData.length; f++)
			{
				this.onElementData[f](strData);
			}
		},
		onNotification:[],
		loadNotificationData : function(topic, strData){
			for(var f=0; f < this.onNotification.length; f++)
			{
				this.onNotification[f](topic, strData);
			}
		},
		onElementStatus:[],
		loadElementStatus : function(id, index, action){
			for(var f=0; f < this.onElementStatus.length; f++)
			{
				this.onElementStatus[f](id, index, action);
			}
		},
		onTouchStatus:[],
		loadTouchStatus : function(id, index){
			for(var f=0; f < this.onTouchStatus.length; f++)
			{
				this.onTouchStatus[f](id, index);
			}
		},
		onBroadcast:[],
		loadOnBroadcast : function(strData, action, time){
			if (action == null) action = "";

			if (this.onBroadcast[action] != undefined){
				this.onBroadcast[action](strData, time, action);
			}
        },

        onServerRoute:[],
		loadOnServerRoute : function(jsonData){
			if (jsonData.route == null || jsonData.method == null) return;

		    var mapCall = jsonData.route+"_"+jsonData.method;

			if (this.onServerRoute[mapCall] != undefined){
				Device.host._hasResponsed = false;
				Device.host.minetype = null;
				var response = this.onServerRoute[mapCall](jsonData);
				if (response != null && !Device.host._hasResponsed){
					Device.host.response(response, Device.host.minetype);
				}
			}
        },
        onInstalled:[],
		loadOnInstallApk : function(packageName, status){
			if (packageName == null) packageName = "";

			if (this.onInstalled[packageName] != undefined){
                if (status === "success"){
                    if (this.onInstalled[packageName][0] != null){
                        var AppName = packageName;
                        
                        setTimeout(function(){ // allow time to run
                        	Device.execute.onInstalled[AppName][0](status);
                        },1000);
                    }
                }
                else if (status === "installed"){
                    if (this.onInstalled[packageName][0] != null)
				        this.onInstalled[packageName][0](status);
                }
                else{ /* failed */
                    if (this.onInstalled[packageName][1] != null)
				        this.onInstalled[packageName][1](status);
                }
			}
		},

		onPreferenceData:[],
		loadPreferenceData : function(key, value){
			if (this.onPreferenceData[key] == undefined) return;

			this.onPreferenceData[key](value);
		},
		onDestory:[],
		loadOnDestory : function(){
			for(var f=0; f < this.onDestory.length; f++)
			{
				this.onDestory[f]();
			}
		},

		onReadFile:[],
		loadOnReadFile : function(path, data){
			if (this.onReadFile[path] != undefined){
				this.onReadFile[path](data);
			}
		},
		onLogging:[],
		loadOnLogging : function(code, msg, date){
			for(var f=0; f < this.onLogging.length; f++)
			{
				this.onLogging[f](code, msg, date);
			}
		},
	},

	campaign: {
		isLoaded: false,
		data: {},
		getElementId: function (type, source_type, source_name){
            var element = this.findData(type, source_type, source_name, true);

            if (element != null)
                return parseInt(element.element_id);

            return 0;
		},
		getElement: function (type, source_type, source_name){
            return this.findData(type, source_type, source_name, true);

		},
		getSource: function (type, source_type, source_name){
            return this.findData(type, source_type, source_name, false);
            
		},
		getWebLocalUrl: function(){
			return "file://"+Device.info.element_path+"web/"+Device.info.source_list_id+"_local.html"
		},

		findData: function (type, source_type, source_name , getElement){
			if (!Device.campaign.isLoaded || Device.campaign.data.elements == undefined) return null;
            
			for(var i = 0; i < Device.campaign.data.elements.length;i++){
				if (Device.campaign.data.elements[i].type == type){
					if (source_type == null){
						if (getElement) 
						    return Device.campaign.data.elements[i];
						else if (Device.campaign.data.elements[i].sources.length > 0)
						    return Device.campaign.data.elements[i].sources[0];
					}else{
						for(var s = 0; s < Device.campaign.data.elements[i].sources.length;s++){
							if (Device.campaign.data.elements[i].sources[s].type == source_type){
								if (source_name == null || Device.campaign.data.elements[i].sources[s].name == source_name){
									if (getElement)
									    return Device.campaign.data.elements[i];
									else
									    return Device.campaign.data.elements[i].sources[s];
								}
							}
						}
					}
				}
			}
            return null;
		},
		setCampaignData: function (strData)
		{
			Device.campaign.data = jQuery.parseJSON(strData);
			Device.campaign.isLoaded = true;
			Device.camera.initialize(Device.campaign.getElementId("video","external", "CAMERA"));
		}
	},
	
	info: {
		isLoaded: false,
		source_list_id: 0,
		user_id: 0,
		device_online: 0,
		local_web: document.URL.substring(0,document.URL.lastIndexOf("/")+1),
		server: document.URL.substring(0,document.URL.lastIndexOf("/")),
		update_time : new Date().getTime()
	},
	
	setInfo:{
		infoCalls:[],
		addInfoChangeCall: function (func)
		{
			Device.setInfo.infoCalls.push(func);
		},
		notifyInfoChange: function (strData)
		{
			if(Device.cacheMode)
			{
				if (!Device.storage.get("DeviceInfo").saved){
					Device.storage.set("DeviceInfo" ,{saved:strData});
				}
			}

			for(var f=0; f < Device.setInfo.infoCalls.length; f++)
			{
				Device.setInfo.infoCalls[f](strData);
			}
			Device.execute.postData("requestDeviceInfo",strData, Device.enablePostRequest);
		},
		loadInfo: function (strData)
		{
			Device.info = JSON.parse(strData.replace(/\\\//g, "/"));
			Device.info = JSON.parse(strData.replace(/&apos;/g, "'"));
			Device.info.isLoaded = false;
			try{
				if (Device.info.local_path != null)
				{
					Device.info.local_web = Device.info.local_path +"web/";
					Device.info.isLoaded = true;
					Device.info.update_time = new Date().getTime();
					if (Device.info.device_online == 1)
						Device.status.isOnline = true;
					if (Device.info.params != null){
						Device.info.params = JSON.parse(Device.info.params);
					}
					else{
                        Device.info.params = {};
					}
				}
			}
			catch(e){
			}
			if (Device.info.source_list_id == null)
				Device.info.source_list_id = 0;

			if (Device.info.local_web == null)
				Device.info.local_web = document.URL.substring(0,document.URL.lastIndexOf("/")+1);

			if (Device.info.server == null)
				Device.info.server = document.URL.substring(0,document.URL.lastIndexOf("/"));
				
		}						
	},
	initialLoad: function ()
	{
		if (document.getElementById('devicebase') != null)
		{
			var info = document.getElementById('devicebase').getAttribute("data-device");
			if (info != null)
			{
				Device.setInfo.loadInfo(info);
				Device.setInfo.isLoaded = true;
			}
		}
		
		try{
			Android.monitorOnlineStatus('Device.status.notifyOnline');
		}
		catch(e){
			Device.status.notifyOnline(true);
		}
		
		Device.setInfo.addInfoChangeCall(function(data){
				Device.setInfo.loadInfo(data);
				setTimeout(function(){Device.execute.loadCompleted();}, 500);
			});
		
		if(this.cacheMode)
		{
			if (Device.storage.get("DeviceInfo").saved){
				this.setInfo.notifyInfoChange(Device.storage.get("DeviceInfo").saved);
			}
		}

		try{
			Android.requestDeviceInfo('Device.setInfo.notifyInfoChange');	
			Android.requestCampaignData('Device.campaign.setCampaignData');	
			this.isRunning = true;
		}
		catch(e){
			this.isRunning = false;
			this.campaign.setCampaignData(Device.simulate.campaignData);
			this.setInfo.notifyInfoChange(Device.simulate.deviceInfo);
		}
	},
	
	storage:{
		get: function (name, defaultVal)
		{
			var formList = defaultVal;
			try {
				var localdata = eval('localStorage.'+name+Device.info.source_list_id);
				if (localdata != undefined) {
					if (!(localdata.substr(0,1) == '{' || localdata.substr(0,1) == '[')) return localdata;
	
					try {
						formList = JSON.parse(localdata);
					} catch (error) {
						return defaultVal;
					}
				}
			} catch (error) {
			}
			return formList;
		},
		set: function (name, objectList)
		{
			var strdata = objectList;
			
			if (typeof objectList === "object"){
				strdata = JSON.stringify(objectList);
			}else if (typeof objectList !== "string"){
				strdata = "" + objectList;
			}

			eval('localStorage.'+name+Device.info.source_list_id+' = strdata');
		},
		clear: function (name)
		{
			eval('localStorage.'+name+Device.info.source_list_id+' = []');
		},
	},

	writeFile:function (data, name, path){
		try{
			if (path != null)
				Android.writeFile(data, name, path);
			else
				Android.writeFile(data, name);
		}
		catch (e){
			Device.log('Failed to write File: '+name, true);
		}
	},

	logError: function (msg, show){
		this.log(msg, show, true)
	},

	log: function (msg, show, withLine)
	{
		if (!this.enableLog && show != true) return;
		
		if (this.enableLogShowLine || withLine == true){
			try{
				this.lastLog = new Error();
				var frame = this.lastLog.stack.split("\n")[2];
				var lineNumber = frame.split(":")[1];
				var functionName = frame.split(" ")[5];
				
				try
				{
					Android.log(msg +" : " +frame )
				}
				catch(e){
					console.log(msg +" : " +frame );
				}
			}catch(e){
			}
			
		}else{
			try
			{
				Android.log(msg)
			}
			catch(e){
				console.log(msg);
			}
		}
	},
	
	status:{
		isOnline: false,
		onlineCalls:[],
		addOnlineCall: function (func)
		{
			this.onlineCalls.push(func);
		},
		notifyOnline: function (isOnline)
		{
			Device.status.isOnline = isOnline;
			for(var f=0; f < this.onlineCalls.length; f++)
			{
				this.onlineCalls[f](Device.status.isOnline);
			}
		},
	},
	loadScript : function(jsFilePath, func){
		
		var js = document.createElement("script");
		js.type = "text/javascript";
		js.src = jsFilePath;
		if (func != null)
		{
			js.onload = function () {
				func();
			}
		}
		document.body.appendChild(js);
	},
	form : {
		url:"",
		name:"form_list",
		sendWhenOnline: true,
		headers: {},
		ajaxcallback: null,
		initialize: function (url, ajaxcallback, storage_name)
		{
			this.url=url;
			this.ajaxcallback = ajaxcallback;
			if (storage_name!=null)
				this.name = storage_name;
				
			Device.status.addOnlineCall(function(){
				if(Device.form.sendWhenOnline){
					Device.form.submit();
				}
			});
			this.submit();
		},
		submit: function ()
		{
			if (!Device.status.isOnline)
				return;

			var formList = Device.storage.get(this.name);
			if (formList.length > 0)
			{
				if (this.url=="")
				{
					Device.log("Device.form not initialize!");
				}
				else
				{
					var submitList = {};
					eval('submitList.'+this.name+' = formList');
					
					Device.storage.clear(this.name);
					jQuery.ajax({
						url: this.url,
						crossDomain: true,
						type: 'post',
						data: submitList,
						headers: this.headers,
						success: function(response) {
							if (this.ajaxcallback != null)
							{
								this.ajaxcallback(response);
							}
						},
						error: function (xhr, ajaxOptions, thrownError) {
							Device.storage.set(this.name, formList);
						}
					});
				}
			}
		},

		append: function (formObj)
		{
			var formList = Device.storage.get(this.name);
			formList.push(formObj);
			
			Device.storage.set(this.name, formList);
		},
		appendAndSend: function (formObj)
		{
			this.append(formObj);
			this.submit();
		},
	},

	host: {
		_url: "http://127.0.0.1",
		_port: 9000,
		minetype : null,
		_hasResponsed : false,
		_modetest : false,
        
		get : function(route, callback){
			this.serverRoute(route, callback, "GET");
		},

		post : function(route, callback){
			this.serverRoute(route, callback, "POST");
		},
		
        getUrl : function(){
           return this._url+":"+this._port+"/"; 
        },
		/**
		 * serverSetPort hosting locally 
		 * @port default(9000)
		 */
        setPort : function(port){
			if(Device.isDeviceRunning()){
				this.port = port;
			    Android.serverPort(port);
		    }
		},

		test: {
			sampleData : {"route":"/","method":"GET","get":{},"query":"","body":{},"headers":{"accept":"*/*","host":"127.0.0.1:9000","accept-encoding":"gzip, deflate, br","http-client-ip":"127.0.0.1","cache-control":"no-cache","content-type":"multipart/form-data; boundary=--------------------------938605489373148992423597","remote-addr":"127.0.0.1","content-length":"273","postman-token":"29bddf05-d670-4041-a5c2-ee243f614554","user-agent":"PostmanRuntime/7.26.3","connection":"keep-alive"}},
				
			get : function(route, testQuery){
				this._modetest = true;
				this.sampleData.route = route;
				this.sampleData.method = "GET";
				this.sampleData.get = this.decodeParams(testQuery);
				this.sampleData.query = testQuery;

				Device.execute.loadOnServerRoute(this.sampleData);

				this._modetest = false;
			},

			post: function(route, testQuery){
				this._modetest = true;
				this.sampleData.route = route;
				this.sampleData.method = "POST";
				this.sampleData.get = this.decodeParams(testQuery);
				this.sampleData.query = testQuery;
				
				Device.execute.loadOnServerRoute(this.sampleData);

				this._modetest = false;
			},
			decodeParams : function(params) {
				//url = decodeURI(url);
				if (typeof params === 'string') {
					//let params = url.split('?');
					var eachParamsArr = params.split('&');
					var obj = {};
					if (eachParamsArr && eachParamsArr.length) {
						eachParamsArr.map(function(param, index, arr){
							var keyValuePair = param.split('=')
							var key = keyValuePair[0];
							var value = keyValuePair[1];
							obj[key] = value;
						})
					}
					return obj;
				}
			}
		},
		/**
		 * serverRoute hosting locally 
		 * @callback(route, callback, method)
		 */

		serverRoute : function(route, callback, method){
			if (typeof route !== "string" || typeof method !== "string") return;

			method= method.toUpperCase();
			if (route.substr(0,1) != "/")
				route = "/"+route;

			Device.execute.onServerRoute[route+"_"+method] = callback;

			if(Device.isDeviceRunning()){
				Android.serverRoute(route, "Device.execute.loadOnServerRoute", method);
			}
		},
		/**
		 *response
		 *
		 * should be called within GET / POST function
		 *
		 * @response
		 * @minetype
		 */
		response : function(response, minetype){
			if(typeof response !== "string" && minetype == null){
				response = JSON.stringify(response);
				minetype = "application/json";
			}
			else if(minetype == null){
				minetype = "text/html";
			}
			this.minetype = null;
			this._hasResponsed = true;
            
			if (Device.host.test._modetest){
				Device.log(response);
			}
			if(Device.isDeviceRunning()){
				Android.serverResponse(response ,minetype);
			}
		}
	},
	
}

// will trigger by device when monitorTouch is activated
function deviceTouched(){
	Device.execute.loadTouchStatus();
}

function elementTouched(element_id, index){
	Device.execute.loadTouchStatus(element_id, index);
}

if (window.jQuery != undefined){
	jQuery(document).ready(function (){
		Device.initialLoad();
	});
}else{
	Device.initialLoad();
}

window.Device = Device;
