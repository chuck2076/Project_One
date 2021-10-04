// using nps api: https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=S3FQh2LolEVzZgRjcg7QskevKLZrUOfgYYhWZucF searching by state initials

// var wildfireUrl = "https://api.ambeedata.com/latest/fire?lat=12.9889055&lng=77.574044"

var latitude;
var longitude;


var nationalParkUrl = "https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=S3FQh2LolEVzZgRjcg7QskevKLZrUOfgYYhWZucF";

// $.ajax({
//     url: nationalParkUrl,
//     method: "GET"
// }).then(function (response){
//     console.log(response.data[32].latitude, response.data[32].longitude);
//     let latitude = response.data[32].latitude;
//     let longitude = response.data[32].longitude;
//     let parkName = response.data[32].fullName;
//     console.log(parkName);
// })

fetch(nationalParkUrl)
    .then(function(response) {
        return response.json();
    }).then(function(callData) {
        latitude = callData.data[32].latitude;
        longitude = callData.data[32].longitude;
        let parkName = callData.data[32].fullName;
        console.log(latitude, longitude, parkName);
        console.log(callData.data.length);
    });