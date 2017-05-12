var locations = [
	{
		"name": "Sushi Kashiba",
		"lat": 47.6097769,
		"lng": -122.3437168,
		"zoom": 17
	},
	{
		"name": "Shiros",
		"lat": 47.6147782, 
		"lng": -122.349623,
		"zoom": 17
	}, 
	{
		"name": "Momiji",
		"lat": 47.6147953, 
		"lng": -122.3187036,
		"zoom": 17
	},
	{
		"name": "Umi Saki House",
		"lat": 47.6133383, 
		"lng": -122.3482741,
		"zoom": 17
	},
  
    {
        "name": "Mashiko",
        "lat": 47.560998,
        "lng": -122.386751,
        "zoom": 17
    }];

var map;

function initMap() {
	map = new google.maps.Map($('#map')[0], {
		center: {lat: 47.6205, lng: -122.3493},
		zoom: 8
	});

	createMarkers();
}

function createMarkers() {
	$.each(locations, function (index, value) {
		var marker = new google.maps.Marker({
        	position: { lat: value.lat, lng: value.lng }});
		
		marker.setMap(map);

		var infoWindow = new google.maps.InfoWindow({
        	content: value.name });
	
		marker.addListener( 'click', function( ) {
        	infoWindow.open( map, marker );
        });
	});
}

$('#sushi').on('change', changeCenter);

function changeCenter() {
	var place = $(this).val();
	var location = $.grep(locations, function (n, i) {
		return n.name == place;
	})[0];

	if(location) {
		map.setCenter({lat: location.lat, lng: location.lng});
		map.setZoom(location.zoom);	
	}
	
}