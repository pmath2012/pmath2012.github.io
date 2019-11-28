var rot=0;
const key='pk.eyJ1IjoicG1hdGgiLCJhIjoiY2szajh6aGVqMDRndjNjcXN6Y3VrcHRubiJ9.OoeN_5Xde_mwfTYsoAf5VQ';
var vid1='https://archive.org/download/Mario1_500/Mario1_500_LQ.mp4';
var vid2='https://archive.org/download/Mario1_500/Mario1_500_LQ.mp4';
var vid3='https://archive.org/download/Mario1_500/Mario1_500_LQ.mp4';
var playlist = ['Mario 2', 'Mario 3','Mario 4'];

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

var preview = function takePreview(e) {
	e.preventDefault();
	var canvas = document.querySelector('#videoCanvas');
	var video = document.querySelector('#videoPlayer');
	var thumbnail =  document.querySelector('#thumbnail-container');
	canvas.width = video.offsetWidth;
	canvas.height = video.offsetHeight;
	canvas.getContext("2d").drawImage(video, 0,0, video.offsetWidth, video.offsetHeight);
	var img = new Image();
	img.src = canvas.toDataURL();
	thumbnail.appendChild(img);
}

var rotate = function rotate(e) {
	e.preventDefault();
	var video = document.querySelector('#videoPlayer');
	rot = rot+90;
	str = 'transform:rotate('+rot+'deg)';
	video.setAttribute('style',str);
}

var toggleControls = function toggleControls(e){
	e.preventDefault();
	var video = document.querySelector('#videoPlayer');
	var controls = video.controls;
	video.controls = !controls;
}

var mirror = function mirror (e){
	e.preventDefault();
	var video = document.querySelector('#videoPlayer');
	var canvas = document.querySelector('#videoCanvas');
	var thumbnail =  document.querySelector('#thumbnail-container');
	canvas.width = video.offsetWidth;
	canvas.height = video.offsetHeight;
	setInterval(function(){
		if(!video.ended|| !video.paused){
			canvas.getContext("2d").drawImage(video, 0,0, video.offsetWidth, video.offsetHeight);
			var img = new Image();
			img.src = canvas.toDataURL();
			img.width = '100%';
			img.height= '100%';
			thumbnail.appendChild(img);
			}
	},10);	
}

var commentHandler = function commentHandler(e){
	e.preventDefault();
	var fname = localStorage.getItem('fname');
	if (!!fname){
		var comment = document.querySelector('#comment');
		if (!!comment.value){
			var city;
			var country;
			var prevComments=document.querySelector('#prevComments');
			let finalComment = fname+' : '+comment.value+' @ '+now();
			var newLb = document.createElement('label');
			navigator.geolocation.getCurrentPosition(function(position) {
				latitude= position.coords.latitude;
				longitude= position.coords.longitude;
				const Http = new XMLHttpRequest();
				const url= 'http://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude;
				Http.open("GET", url);
				Http.send();
				Http.onreadystatechange = (e) =>{
					
					if(Http.readyState==4 && Http.status==200){	
						var resp = JSON.parse(Http.responseText);
						city = resp.address.village;
						country = resp.address.country;
						localStorage.setItem('city',city);
						localStorage.setItem('country',country);
						localStorage.setItem('lon',longitude);
						localStorage.setItem('lat',latitude);
						newLb.textContent = newLb.textContent+' from : '+city+' in '+country;
						localStorage.setItem('comments',prevComments.innerHTML);
					}
				}
				});
			newLb.textContent = finalComment
			newLb.classList.add('commentLabel');
			prevComments.appendChild(newLb);
			prevComments.appendChild(document.createElement('br'));
		}else{
			return;
		}
	}else{
		
		var popup = document.querySelector('#signup');
		popup.style.display='block';
	}
}

var closePopup = function closePopup(){
	var popup = document.querySelector('#signup');
	popup.style.display='none';
}

var signup = function signup(e){
	e.preventDefault();
	console.log('here');
	var fname = document.querySelector('#fname');
	var lname = document.querySelector('#lname');
	var email = document.querySelector('#email');
	var phone = document.querySelector('#phone');
	if (!!fname.value & !!lname.value & !!email.value & !!phone.value){
		if (!validEmail(email.value)){
			alert('please enter a valid email address');
			return false;
		}
		// Just checking for numbers, not checking for length etc.
		if (!Number.isInteger(parseInt(phone.value))){
			
			alert('please enter valid phone number');
			return false;
		}
		localStorage.setItem('fname',fname.value);
		localStorage.setItem('lname',lname.value);
		localStorage.setItem('email',email.value);
		localStorage.setItem('phone',phone.value);
		var popup = document.querySelector('#signup');
		popup.style.display='none';
		return true;
	} else{
		alert('please enter all values');
		return false;
	}
	
}

//using a generic testing function to validate email address
function validEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}

function now(){
	let d = new Date();
	return d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear()+"  "+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
}

function loadMap(){
	var lon = localStorage.getItem('lon');
	var lat = localStorage.getItem('lat');
	if (!!lat && !!lon){
		var mymap = L.map('mapid').setView([lat, lon], 13);
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: key
}).addTo(mymap);
		var marker = L.marker([lat, lon]).addTo(mymap);
	}
}

function loadComments(){
	var comments = localStorage.getItem('comments');
	var prevComments=document.querySelector('#prevComments');
	if (!!comments){
		prevComments.innerHTML = comments;
	}
}

function jukebox(){
	
	var jukeboxVids = document.querySelectorAll('.jukeboxVid');
	var video = document.querySelector('#videoPlayer');
	video.onprogress = function(){
		document.querySelector('#nextPlay').innerHTML='Playing Next :'+playlist[0];
	}
	video.onended = function(){
		jukeboxVids[0].play();
	}
	for (var i=0; i<jukeboxVids.length-1 ; i++){
		var vid = jukeboxVids[i];
		var nextVid = jukeboxVids[i+1];
		vid.onprogress = function(){
			document.querySelector('#nextPlay').innerHTML='Playing Next :'+playlist[i+1];
		}
		vid.onended = function(){
			nextVid.play();
		}
	}
}

document.addEventListener("DOMContentLoaded", function(){
	var playVideoBtn = document.querySelector('#playVideoBtn');
	playVideoBtn.addEventListener('click',play);
	var seekBtn = document.querySelector('#seekBtn');
	seekBtn.addEventListener('click',seek);
	var previewBtn = document.querySelector('#previewBtn');
	previewBtn.addEventListener('click',preview);
	var rotateBtn = document.querySelector('#rotateBtn');
	rotateBtn.addEventListener('click',rotate);
	var controlsCheck =  document.querySelector('#controlsCheck');
	controlsCheck.addEventListener('change', toggleControls);
	var mirrorBtn = document.querySelector('#mirrorBtn');
	mirrorBtn.addEventListener('click',mirror);
	var postComment = document.querySelector('#postBtn');
	postBtn.addEventListener('click',commentHandler);
	var login = document.querySelector('#login');
	login.addEventListener('click',signup);
	var exitBtn = document.querySelector('#exit');
	exitBtn.addEventListener('click',closePopup);
	
	loadComments();
	loadMap();
	jukebox();
});