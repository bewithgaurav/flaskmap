var map;
var infoWindow;
var service;

//function to add infowindow to marker on click
function addInfoWindow(marker, message,myLatLng) {
var infoWindow = new google.maps.InfoWindow({
    content: ''
});
        var geocoder = new google.maps.Geocoder;
        google.maps.event.addListener(marker, 'click', function () {
			geocodeLatLng(geocoder, map,marker, infoWindow,myLatLng);
			//infoWindow.open(map, marker);
        });
}

//function to reverse geocode
function geocodeLatLng(geocoder, map,marker, infoWindow,myLatLng) {
geocoder.geocode({'location': myLatLng}, function(results, status) {
	if (status === google.maps.GeocoderStatus.OK) {
	    if (results[1]) {
	      infoWindow.setContent(results[1].formatted_address);
	      infoWindow.open(map, marker);
	    } else {
	      window.alert('No results found');
	    }
	} else {
	    window.alert('Geocoder failed due to: ' + status +" Please Wait for a few seconds..");
	  	}
	});
}

//initialize and set markers on map
function initialize() {
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 5,
	  center: new google.maps.LatLng(28.459497,77.026638),
	  mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	var l=a.length;
	var bounds = new google.maps.LatLngBounds();
	
	for(var i=0;i<l;i++)
	{
		var lat=a[i].lat;
		var lng=a[i].lng;
		var myLatLng =new google.maps.LatLng(lat,lng);
		var iconBase = 'img/';
		
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map
		});
		bounds.extend(myLatLng);
		addInfoWindow(marker,"hello",myLatLng);
		map.fitBounds(bounds);
	}
	
}
	
google.maps.event.addDomListener(window, 'load', initialize);