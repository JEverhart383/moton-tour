
/****
    Initialize Map and Add Layer from MapBox
***/


var mymap = L.map('map').setView([37.30266489591309, -78.39217185974121], 14.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamVmZmV2ZXJoYXJ0MzgzIiwiYSI6IjIwNzVlOTA3ODI2MTY0MjM3OTgxMTJlODgzNjg5MzM4In0.QA1GsfWZccIB8u0FbhJmRg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 19,
    id: 'jeffeverhart383.po06polc',
    accessToken: 'pk.eyJ1IjoiamVmZmV2ZXJoYXJ0MzgzIiwiYSI6IjIwNzVlOTA3ODI2MTY0MjM3OTgxMTJlODgzNjg5MzM4In0.QA1GsfWZccIB8u0FbhJmRg'
}).addTo(mymap);


/****
    Create Walking Tour Object 
***/

window.motonWalkingTour =  {
    wayPoints: [
    {
        name: "Moton Musuem", 
        lat: 37.29168827648954, 
        long: -78.39762319181799, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    },
    {
        name: "Mary E. Branch Community Center/School", 
        lat: 37.29327304292218, 
        long: -78.39563350200504, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Farmville Shopping Center/Dr. Miller's Office", 
        lat: 37.299878736992646, 
        long: -78.3936507628098, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Beulah AME Church & Parsonage", 
        lat: 37.300961930339504, 
        long: -78.39330232709496, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "First Baptist Church", 
        lat: 37.30078817348676, 
        long: -78.39320987470298, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "State Theater", 
        lat: 37.30110869746404, 
        long: -78.39307894937544, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "College Shoppe", 
        lat: 37.30148106351243, 
        long: -78.39281466796844, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Prince Edward County Courthouse", 
        lat: 37.30185342956083, 
        long: -78.39254963219014, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Farmville Baptist Church", 
        lat: 37.302071694319416, 
        long: -78.39243764996377, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "J.J. Newberry's", 
        lat: 37.3027297156279, 
        long: -78.3926264104232, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Presbyterian Church", 
        lat: 37.30298473503189, 
        long: -78.39327223606257, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
     {
        name: "Farmville <i>Herald</i> offices", 
        lat: 37.30218082669871, 
        long: -78.39359091602115, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Farmville Methodist Church/Confederate Statue", 
        lat: 37.30179739653813, 
        long: -78.395375255556833, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "John's Memorial Episcopal Church, Parish House/Gordon Moss Home", 
        lat: 37.30160939044999, 
        long: -78.39598101571053, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Jarman", 
        lat: 37.30148198552178, 
        long: -78.39786568663865, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    },
    {
        name: "Race Street/Forrester", 
        lat: 37.2965972638105, 
        long: -78.39862416505665, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    },
    {
        name: "Rev. Frances L. Griffin home/E.B. Allen Funeral Home", 
        lat: 37.29388383220629, 
        long: -78.39826818562895, 
        desc: "", 
        link: "<a href='/places/place.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }
    ], 
    createMapMarkers: function(arrayOfWayPoints){

    for (var i = 0; i < arrayOfWayPoints.length; i ++){
            L.marker([arrayOfWayPoints[i].lat, arrayOfWayPoints[i].long]).addTo(mymap)
             .bindPopup("<h5>" + arrayOfWayPoints[i].name + "<h5><p>" + arrayOfWayPoints[i].link + "</p>" );
        }
    }, 
    currentUserPosition: {
        lat: undefined, 
        lng: undefined
    }, 
    findMyLocation: function(){
        if (window.motonWalkingTour.currentUserPosition.lat != undefined 
            && window.motonWalkingTour.currentUserPosition.lng != undefined ){
            mymap.setView(window.motonWalkingTour.currentUserPosition, 17);
        } else {
            alert("Sorry, it doesn't look like your web browser supports GeoLoation. Try accessing a secure version of this map at https://civilrightstrail.motonmuseum.org"); 
        }
    }


};


//call to create markers 

motonWalkingTour.createMapMarkers(motonWalkingTour.wayPoints); 

//create circle at moton



function onLocationFound(e) {
   console.log(e); 
   userPositionCircle.setLatLng([e.latitude, e.longitude]);
   window.motonWalkingTour.currentUserPosition.lat = e.latitude;
   window.motonWalkingTour.currentUserPosition.lng = e.longitude;  
   
}

var userPositionCircle = L.circle(
        [window.motonWalkingTour.wayPoints[0].lat, 
        window.motonWalkingTour.wayPoints[0].long]
        ).addTo(mymap); 

mymap.locate({watch:true, enableHighAccuracy:true}); 


mymap.on('locationfound', onLocationFound);   



