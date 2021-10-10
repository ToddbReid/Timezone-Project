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
var sunriseApiKey = "da4235e5d6d2446daff793df7de8cf76"

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


            var sunriseQueryURL = "https://api.ipgeolocation.io/astronomy?apiKey=" + sunriseApiKey + lat + "&long=" + lon;
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