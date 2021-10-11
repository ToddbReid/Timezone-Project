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

var saveButton = document.querySelector('.save-btn');

var favoriteCitiesSunrise = JSON.parse(localStorage.getItem("favorite-sunrise")) || [];
var favoriteList = document.getElementById('favorite-list-sunrise');



var geoApiKey = "da4235e5d6d2446daff793df7de8cf76"


var getLocation = function (str) {

    var geoQueryURL = "https://api.ipgeolocation.io/astronomy?apiKey=" + geoApiKey + "&location=" + str;

    fetch(geoQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var cityNameDiv = document.querySelector('.city-name');
            cityNameDiv.innerHTML = searchInput.value;

            var lat = data.location.latitude;
            var lon = data.location.longitude;


                    var apiKey = "da4235e5d6d2446daff793df7de8cf76"
                    var sunriseQueryURL = "https://api.ipgeolocation.io/astronomy?apiKey=" + apiKey + "&lat=" + lat + "&long=" + lon;

                    fetch(sunriseQueryURL)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            console.log(data)

                            var sunriseDiv = document.querySelector('.sunrise');
                            sunriseDiv.innerHTML = data.sunrise;

                            var sunsetDiv = document.querySelector('.sunset');
                            sunsetDiv.innerHTML = data.sunset;
                    
                            
                })
        })


}



searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    var cityName = searchInput.value;
    getLocation(cityName)
});


function saveToLocalStorage(){
    var searchInput = document.querySelector('.uk-search-input');
    var cityName = searchInput.value;

    favoriteCitiesSunrise.push(cityName);

    localStorage.setItem("favorite-sunrise", JSON.stringify(favoriteCitiesSunrise));

    renderFavorites();
}

function renderFavorites() {
    favoriteList.innerHTML = "";
    for(var i=0; i < favoriteCitiesSunrise.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = favoriteCitiesSunrise[i];
        favoriteList.append(liEl);
    }
}

function favoriteClick(event){
    console.log(event.target.textContent);

    getLocation(event.target.textContent);
}

renderFavorites();
saveButton.addEventListener("click", saveToLocalStorage);

favoriteList.addEventListener("click", favoriteClick);


