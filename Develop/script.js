//openWeather API
//my apiKey = c4a186ac3a697bd2fb942f498b34386c
var apiKey = "c4a186ac3a697bd2fb942f498b34386c";
//grabbing text input box 
var searchInput = document.querySelector('#searchInput');
var searchResults = document.querySelector("#searchResults");
//query Url to call openWeather API with concatenated (value of text input search) and (apiKey) parameters
var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + "austin" + "&appid=" + apiKey;

// fetch(queryUrl)
//     .then (response => response.json())
//     .then (data => console.log(data))
// .catch(err => alert('Incorrect coordinates!'))
// console.log(data);

// using nps api: https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=S3FQh2LolEVzZgRjcg7QskevKLZrUOfgYYhWZucF searching by state initials



var latitude;
var longitude;
var nationalParkApi = "S3FQh2LolEVzZgRjcg7QskevKLZrUOfgYYhWZucF";
// var stateCode = document.getElementById("#stateInput").value;
var stateCode = "CA";

// ${searchInput}

var nationalParkUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${nationalParkApi}`;


// var nationalParkName = document.getElementById("#parkNameInput");
var nationalParkName = "Presidio of San Francisco";

// function apiCallState() {
//     fetch(nationalPark)
// }


function apiCallName() {
    fetch(nationalParkUrl)
        .then(function (response) {
            return response.json();
        }).then(function (callData) {
            // console.log(latitude, longitude, parkName);
            // console.log(callData.data.length);
            let i = 0;
            for (i; i < callData.data.length; i++) {
                console.log(callData.data[i].fullName);
                // let liEl = document.createElement("button");
                // liEl.textContent = callData.data[i].fullName;
                // searchResults.append(liEl);
                if (nationalParkName == callData.data[i].fullName) {
                    console.log(i, "name matches!");
                    // console.log(callData.data[i].latitude, callData.data[i].longitude);
                    break;
                }
            }
            console.log(callData.data[i].images);
            let image = callData.data[i].images[Math.floor(Math.random() * callData.data[i].images.length)].url;
            console.log(image);
            latitude = callData.data[i].latitude;
            longitude = callData.data[i].latitude;
            // one call and wildfire call goes here passing the lat and long
            console.log("Out of the loop");
            // console.log(latitude, longitude, i);
            wildfireCall(latitude, longitude);
        });
}

apiCallName();

function wildfireCall(latitude, longitude) {

    var wildfireUrl = `https://api.ambeedata.com/latest/fire?lat=${latitude}&lng=${longitude}`;
    fetch(wildfireUrl, {
            "method": "GET",
            "headers": {
                "x-api-key": "4fd71a9226eb5db201124af457f8efe834d262c977ad3178d2c681b433e7a6af",
                "Content-type": "application/json"
            }
        })
        .then(response => {
            console.log(response);
            return response.json();
        }).then(function (data) {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
}