var map;
var markers = [];

var icons = {
    drone: {
        icon: "./assets/drone.png"
    },
    rock: {
        icon: "./assets/rock.png"
    },
    water: {
        icon: "./assets/flood.png"
    },
    fire: {
        icon: "./assets/fire.png"
    },
    tree: {
        icon: "./assets/tree.png"
    },
    start: {
        icon: "./assets/start.png"
    },
    end: {
        icon: "./assets/end.png"
    }
};

var count = 1;
var drone2 = [];

var features = [
    {
        lat: 25.092257,  
        lng: 55.314091,
        type: "drone"
    },
    {
        lat: 25.092835, 
        lng: 55.313858,
        type: "water"
    },
    {
        lat: 25.094302,
        lng: 55.313233,
    },
    {
        lat: 25.095778, 
        lng: 55.316497,
        type: "fire"
    },
    {
        lat: 25.096449,
        lng: 55.318550,
        type: "rock"
    },
    {
        lat: 25.095728,
        lng: 55.318672,
        type: "rock"
    },
    {
        lat: 25.095476, 
        lng: 55.317330,
        type: "tree"
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 25.091921, lng: 55.314220},
        zoom: 17,
        draggable: true,
        styles: [
            {
                featureType: "all",
                elementType: "labels",
                stylers: [
                { visibility: "off" }
                ]
            }
            ]
    });

    markers.push(placeMarker(features[0].lat, features[0].lng, icons[features[0].type]));
    drone2.push(placeMarker(features[0].lat, features[0].lng, icons[features[0].type]));
}

function placeMarker(lat, lng, icon) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        icon: icon.icon,
        map: map
    });
    return marker;
}

function StartJourney(){
    Path_1();
}

function Path_1(){
    markers.push(placeMarker(features[0].lat, features[0].lng, icons["start"]));
    markers.push(placeMarker(25.095055, 55.316902, icons["end"]));
    Move(features[count].lat, features[count].lng, "debris", Path_1_a);
    Move2(25.091672, 55.314396, "none", Move2Drone);
}

function Move2Drone(){
    Move2(25.093702, 55.319628, "none", Move2Drone2);
}

function Move2Drone2(){
    Move2(25.095733, 55.318675, "none", Move2Drone3);
}

function Move2Drone3(){
    Move2(25.095361, 55.317811, "none", Move2Drone4);
}

function Move2Drone4(){
    Move2(25.094950, 55.317239, "none", Move2Drone5);
}

function Move2Drone5(){
    Move2(25.095055, 55.316902, "none", Move2Drone5);
}

function Path_1_a(){
    document.getElementsByTagName("h1")[0].hidden = false;
    markers.push(placeMarker(features[1].lat, features[count].lng, icons[features[count].type]));
    document.getElementsByClassName("d1")[0].style.visibility = "visible";
    document.getElementsByClassName("d1")[0].style.backgroundColor = "#4169E1";
    Move(features[count].lat, features[count].lng, "debris", Path_1_b);
    count++;
}

function Path_1_b(){
    Move(features[count].lat, features[count].lng, "debris", Path_2);
    count++;
}

//Second obstacle path
function Path_2(){
    Move(features[count].lat, features[count].lng, "debris", Path_2_a);
}

function Path_2_a(){
    markers.push(placeMarker(features[count].lat, features[count].lng, icons[features[count].type]));
    document.getElementsByClassName("d2")[0].style.visibility = "visible";
    document.getElementsByClassName("d2")[0].style.backgroundColor = "#ce2029";
    Move(features[count].lat, features[count].lng, "debris", Path_2_b);
    count++;
}

function Path_2_b(){
    Move(features[count].lat, features[count].lng, "debris", Path_3);
    count++;
}

function Path_3(){
    Move(features[count].lat, features[count].lng, "debris", Path_3_a);
}

function Path_3_a(){
    markers.push(placeMarker(features[count].lat, features[count].lng, icons[features[count].type]));
    document.getElementsByClassName("d3")[0].style.visibility = "visible";
    document.getElementsByClassName("d3")[0].style.backgroundColor = "#8B4513";
    count++;
    Move(features[count].lat, features[count].lng, "debris", Path_4);
}
function Path_4(){
    markers.push(placeMarker(features[count].lat, features[count].lng, icons[features[count].type]));
    document.getElementsByClassName("d4")[0].style.visibility = "visible";
    document.getElementsByClassName("d4")[0].style.backgroundColor = "#006400";
    count++;
    Move(25.095055, 55.316902, "debris", displayRoute);
}

function Move(lat, lng, obstacle, next){
    var newPosition = new google.maps.LatLng(lat,lng);
    markers[0].animateTo(newPosition, {
        duration: 1600,
        complete: function(){
            next != null ?  next() : console.log("Done");
        }
    }); 
}

function Move2(lat, lng, obstacle, next){
    var newPosition = new google.maps.LatLng(lat,lng);
    drone2[0].animateTo(newPosition, {
        duration: 1600,
        complete: function(){
            next != null ?  next() : console.log("Done");
        }
    }); 
}

function displayRoute() {

    var end = new google.maps.LatLng(features[0].lat, features[0].lng);
    var start = new google.maps.LatLng(25.095055, 55.316902);

    var directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });
    directionsDisplay.setMap(map); 

    var request = {
        origin : start,
        destination : end,
        waypoints: [
            {
                location: new google.maps.LatLng(25.095594, 55.318393),
                stopover: true
            },
            {
                location: new google.maps.LatLng(25.094137, 55.319348),
                stopover: true
            }
        ],
        travelMode : google.maps.TravelMode.DRIVING
    };
    var directionsService = new google.maps.DirectionsService(); 
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}