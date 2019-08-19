$(function(){
	if ("Notification" in window) {
		Notification.requestPermission(function(result){
			if (false) {
			} else if (result === 'denied') {
				console.log('Permission wasn\'t granted. Allow a retry.');
				return;
			} else if (result === 'default') {
				console.log('The permission request was dismissed.');
				return;
			} else if (result === 'granted') {
				console.log('The permission request was granted.');
				return;
			}
		});
	}
});
