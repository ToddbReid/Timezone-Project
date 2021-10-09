var localTime = new Date().toLocaleString();
var localTimeDiv = document.querySelector('#local-time');
localTimeDiv.innerHTML = localTime;


var runFunction = function () {
    var localTime = new Date().toLocaleString();
    var localTimeDiv = document.querySelector('#local-time');
    localTimeDiv.innerHTML = localTime;
}

setInterval(runFunction, 1000);




var searchInput = document.querySelector('.uk-search-input');
var searchButton = document.querySelector('.uk-search-icon-flip');


var geoApiKey = "47cd34a65d916a8b8d24d64498166130"

var getLocation = function (str) {

    var geoQueryURL = "http://api.positionstack.com/v1/forward?access_key=" + geoApiKey + "&query=" + str;

    fetch(geoQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var cityNameDiv = document.querySelector('.city-name');
            cityNameDiv.innerHTML = data.data[0].name;

            var lat = data.data[0].latitude;
            var lon = data.data[0].longitude;

            console.log(lat);
            console.log(lon);


            var sunriseQueryURL = "https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon;
            fetch(sunriseQueryURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)

                    var sunriseDiv = document.querySelector('.sunrise');
                    sunriseDiv.innerHTML = data.results.sunrise;

                    var sunsetDiv = document.querySelector('.sunset');
                    sunsetDiv.innerHTML = data.results.sunset;


                })



        })






}



searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    var cityName = searchInput.value;
    getLocation(cityName)
});