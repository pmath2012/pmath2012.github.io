var play = function playVideo (e) {
	e.preventDefault();
	var videoUrl = document.querySelector('#videoURL');
	var errorField = document.querySelector('#videoURLError');
	var videoTag = document.querySelector('#videoPlayer');
	if (!!videoUrl.value) {
		videoTag.onloadstart = function (){
			errorField.textContent='Started to load';
		}
		videoTag.onloadedmetadata = function() {
			errorField.textContent='meta data loaded';
		}
		videoTag.onprogress = function (){
			errorField.textContent='Downloading/Buffering video';
		}
		videoTag.oncanplay = function() {
			errorField.textContent='';
			videoTag.play();
		}
		videoTag.src=videoURL.value;
		videoTag.load();
	}else{
		errorField.textContent = 'Please enter a valid URL';
		return false;
	}
}

var seek = function seekVideo(e) {
	e.preventDefault();
	var seekVal = document.querySelector('#seekVal');
	var videoTag = document.querySelector('#videoPlayer');
	var duration = videoTag.duration;
	var errorField = document.querySelector('#seekError');
	if(!!seekVal.value){
		var val = parseInt(seekVal.value);
		if (Number.isInteger(val) && val >= 0){
			if ( val < duration){
				videoTag.currentTime=val;
				videoTag.play();
			}else {
				errorField.textContent='Please enter a value between 0 and '+Math.floor(duration);
			}
		}else{
			errorField.textContent='Please enter a valid seek value';
		}
	}else{
		errorField.textContent='Please Enter a value';
		return false;
	}
}

document.addEventListener("DOMContentLoaded", function(){
	var playVideoBtn = document.querySelector('#playVideoBtn');
	playVideoBtn.addEventListener('click',play);
	var seekBtn = document.querySelector('#seekBtn');
	seekBtn.addEventListener('click',seek);
});