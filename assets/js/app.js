
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
        desc: "Constructed in 1939, the Robert Russa Moton High School was built for 180 students.  By the 1940s, the student population reached over 450.", 
        link: "<a href='/places/robert-russa-moton-museum.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    },
    {
        name: "Mary E. Branch Community Center/School", 
        lat: 37.29327304292218, 
        long: -78.39563350200504, 
        desc: "Originally called the Farmville Colored School (also Farmville No. 2 or Farmville Training School), this building was constructed in 1926 to serve as an elementary school.", 
        link: "<a href='/places/mary-e-branch-community-center.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Farmville Shopping Center/Dr. N. P. Miller's office", 
        lat: 37.299878736992646, 
        long: -78.3936507628098, 
        desc: "Dr. Nathaniel Peyton Miller, a prominent African-American dentist, was active in many civic organizations, including the NAACP.", 
        link: "<a href='/places/farmville-shopping-center.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Beulah AME Church & Parsonage", 
        lat: 37.300961930339504, 
        long: -78.39330232709496, 
        desc: "Founded in 1868, Beulah African Methodist Episcopal Church served as a center for civil rights organizing while Prince Edward County Public Schools were closed.", 
        link: "<a href='/places/beulah-ame-church.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "First Baptist Church", 
        lat: 37.30078817348676, 
        long: -78.39320987470298, 
        desc: "First Baptist Church, led from 1949 to 1980 by the Rev. L. Francis Griffin, served as the spiritual and tactical center for the civil rights movement in Farmville.", 
        link: "<a href='/places/first-baptist-church.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "State Theater", 
        lat: 37.30110869746404, 
        long: -78.39307894937544, 
        desc: "On Sept. 10, 1959, the Prince Edward County School Foundation began the inaugural year of Prince Edward Academy with speeches in the theater formerly located here. ", 
        link: "<a href='/places/state-theater.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "College Shoppe", 
        lat: 37.30148106351243, 
        long: -78.39281466796844, 
        desc: "In addition to drawing attention to the absence of public education, African-American students protested segregated businesses in downtown Farmville in 1963, including the College Shoppe, formerly located here.", 
        link: "<a href='/places/college-shoppe.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Prince Edward County Courthouse", 
        lat: 37.30185342956083, 
        long: -78.39254963219014, 
        desc: "Prince Edward County Courthouse was the site of a May 20, 1961, rally organized by the National Association for the Advancement of Colored People (NAACP) to recognize the seventh anniversary of <i>Brown v. Board of Education</i> and to protest the continued closure of the public schools.", 
        link: "<a href='/places/prince-edward-county-courthouse.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Farmville Baptist Church", 
        lat: 37.302071694319416, 
        long: -78.39243764996377, 
        desc: "Founded in 1836, Farmville Baptist was one of the four churches that young African-American protestors attempted to integrate on Sunday, July 28, 1963, as part of a peaceful 'kneel-in.'", 
        link: "<a href='/places/farmville-baptist-church.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "J.J. Newberry Co. Department Store", 
        lat: 37.3027297156279, 
        long: -78.3926264104232, 
        desc: "On Friday, July 26, 1963, twelve young African-Americans from Prince Edward County staged a sit-in at the lunch counter in the J. J. Newberry Co. department store formerly located here.", 
        link: "<a href='/places/jj-newberry.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Farmville Presbyterian Church", 
        lat: 37.30298473503189, 
        long: -78.39327223606257, 
        desc: "White residents of Prince Edward County were not unanimous in their response to closing the public schools, and differing opinions threatened to undermine established institutions, including Farmville Presbyterian Church, founded in 1844.", 
        link: "<a href='/places/farmville-presbyterian-church.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
     {
        name: "Farmville <i>Herald</i> offices", 
        lat: 37.30218082669871, 
        long: -78.39359091602115, 
        desc: "The Farmville Herald, published bi-weekly, was founded in 1890.  J. Barrye Wall purchased the Herald in 1921 and served as editor during the period of the school closings.", 
        link: "<a href='/places/farmville-herald-offices.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Farmville Methodist Church/Confederate Statue", 
        lat: 37.30179739653813, 
        long: -78.395375255556833, 
        desc: "The site of Methodist worship since 1832, Farmville United Methodist's current building was constructed in 1907.", 
        link: "<a href='/places/farmville-methodist-church.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "John's Memorial Episcopal Church, Parish House/Gordon Moss Home", 
        lat: 37.30160939044999, 
        long: -78.39598101571053, 
        desc: "When small groups of African-American students attempted to attend services at four downtown Farmville churches to integrate the traditionally white houses of worship on Sunday, July 28, 1963, Johns Memorial, built in 1882, was the only one into which they were admitted.", 
        link: "<a href='/places/johns-memorial-episcopal-church.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }, 
    {
        name: "Jarman Auditorium", 
        lat: 37.30148198552178, 
        long: -78.39786568663865, 
        desc: "Constructed in 1951, Longwood University's auditorium was the site of a June 7, 1955, community meeting.", 
        link: "<a href='/places/jarman-auditorium.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    },
    {
        name: "Race Street/Forrester", 
        lat: 37.2965972638105, 
        long: -78.39862416505665, 
        desc: "One block east of here at the corner of Franklin and Race Streets stands Martha E. Forrester's home.", 
        link: "<a href='/places/race-street-baptist-church.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    },
    {
        name: "Rev. Frances L. Griffin home/E.B. Allen Funeral Home", 
        lat: 37.29388383220629, 
        long: -78.39826818562895, 
        desc: "This house was built in 1961 as the parsonage for First Baptist Church and was home to the Rev. L. Francis Griffin and his family.", 
        link: "<a href='/places/rev-griffin-home.html'>Learn More <span class='glyphicon glyphicon-chevron-right'></span></a>"
    }
    ], 
    createMapMarkers: function(arrayOfWayPoints){

    for (var i = 0; i < arrayOfWayPoints.length; i ++){
            L.marker([arrayOfWayPoints[i].lat, arrayOfWayPoints[i].long]).addTo(mymap)
             .bindPopup("<h5>" + arrayOfWayPoints[i].name + "<h5><p>" + arrayOfWayPoints[i].desc + "</p><p>" + arrayOfWayPoints[i].link + "</p>" );
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



