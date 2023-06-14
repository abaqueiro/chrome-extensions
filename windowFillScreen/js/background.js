chrome.runtime.onMessage.addListener( function(obj,sender,sendResponse){
	if ( obj.msg === 'fillScreen' ){
		console.log('trying to resize')
		chrome.windows.getCurrent(function(window){
			var uInfo = {
				/*left: 0
				, top: 0
				, width: obj.w
				, height: obj.h
				, state: 'normal'*/
				state: 'maximized'
			}
			chrome.windows.update( window.id, uInfo )
		})
	}
})
