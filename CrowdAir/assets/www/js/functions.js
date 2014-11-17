var map;
var marker;
var infowindow;
var watchID;
var geolocate;
var myOptions = {
	      zoom: 6,
		  streetViewControl: true,
	      mapTypeId: google.maps.MapTypeId.ROADMAP,
	      zoomControl: true
	    };
//PhoneGap is ready function
function onDeviceReady() {
	$(window).unbind();
	$(window).bind('pageshow resize orientationchange', function(e){
		max_height();
	});
	max_height();
	
	google.load("maps", "3.8", {"callback":get_position, other_params: "sensor=true&language=en"});
}

function funForwardDirect(pageLocation)
{
	window.location.href=pageLocation;
}


function max_height(){
	var c = $('#gmap');
	var c_h = c.height();

}
		
function get_position(){
	map = new google.maps.Map(document.getElementById("gmap"), myOptions);
		//get geoposition 
    navigator.geolocation.getCurrentPosition(geo_success, geo_error, { maximumAge: 5000, timeout: 3000, enableHighAccuracy: true });
}


function position_track(){
	map = new google.maps.Map(document.getElementById("gmap"), myOptions);
	watchID = navigator.geolocation.watchPosition(geo_success, geo_error, { maximumAge: 5000, timeout: 3000, enableHighAccuracy: true });   
}
function geo_error(error){
	//comment
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function geo_success(position) {
	geolocate=new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	map.setCenter(geolocate);
	map.setZoom(15);

    var info = 
    ('Latitude: '         + position.coords.latitude          + '<br>' +
    'Longitude: '         + position.coords.longitude         + '<br>' +
    'Altitude: '          + position.coords.altitude          + '<br>' +
    'Accuracy: '          + position.coords.accuracy          + '<br>' +
    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
    'Heading: '           + position.coords.heading           + '<br>' +
    'Speed: '             + position.coords.speed             + '<br>' +
    'Timestamp: '         + new Date(position.timestamp));

	var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	if(!marker){
		//create marker
		marker = new google.maps.Marker({
			position: point,
			map: map
		});
	}else{
		//move marker to new position
		marker.setPosition(point);
	}
	if(!infowindow){
		infowindow = new google.maps.InfoWindow({
		    content: info
		});
	}else{
		infowindow.setContent(info);
	}
	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	}); 
}