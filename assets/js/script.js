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

var favoriteCities = JSON.parse(localStorage.getItem("favorite"))||[ ] ;
var favoriteList = document.getElementById('favorite-list');


var apiKey = "da4235e5d6d2446daff793df7de8cf76"

var getCurrentTime = function (str) {
    var queryURL = "https://api.ipgeolocation.io/timezone?apiKey=" + apiKey + "&tz=" + str;

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var cityNameDiv = document.querySelector('.city-name');
            cityNameDiv.innerHTML = data.timezone;

            var timeDiv = document.querySelector('.time-div');
            timeDiv.innerHTML = data.date + " " + data.time_12;

        })

}



searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    var cityName = searchInput.value;
    getCurrentTime(cityName)
});


function saveToLocalStorage() {
    
    var searchInput = document.querySelector('.uk-search-input');
    var cityName = searchInput.value;

    favoriteCities.push(cityName);
    
    localStorage.setItem("favorite", JSON.stringify(favoriteCities));
    
    renderFavorites();
}

function renderFavorites (){
    favoriteList.innerHTML = "";
    for(var i=0; i < favoriteCities.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = favoriteCities[i];
        favoriteList.append(liEl);
    }
}

function favoriteClick(event){
    console.log(event.target.textContent);

    getCurrentTime(event.target.textContent);
}

renderFavorites();
saveButton.addEventListener("click", saveToLocalStorage);

favoriteList.addEventListener("click", favoriteClick);