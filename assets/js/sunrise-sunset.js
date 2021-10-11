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
<<<<<<< .merge_file_lWZT3Q
var saveButton = document.querySelector('.save-btn');

var favoriteCitiesSunrise = JSON.parse(localStorage.getItem("favorite-sunrise")) || [];
var favoriteList = document.getElementById('favorite-list-sunrise');
=======
>>>>>>> .merge_file_UnvzRH


var geoApiKey = "47cd34a65d916a8b8d24d64498166130"

<<<<<<< .merge_file_lWZT3Q

=======
>>>>>>> .merge_file_UnvzRH
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

<<<<<<< .merge_file_lWZT3Q
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


=======
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

>>>>>>> .merge_file_UnvzRH
searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    var cityName = searchInput.value;
    getLocation(cityName)
});

<<<<<<< .merge_file_lWZT3Q
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
=======
var input = document.getElementById("save-btn");
localStorage.setItem("server", input.val());
>>>>>>> .merge_file_UnvzRH
