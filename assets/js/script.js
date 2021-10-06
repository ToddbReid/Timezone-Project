




var localTime = new Date().toLocaleString();
var localTimeDiv = document.querySelector('#local-time');
localTimeDiv.innerHTML = localTime;


var runFunction = function () {
    var localTime = new Date().toLocaleString();
    var localTimeDiv = document.querySelector('#local-time');
    localTimeDiv.innerHTML = localTime;
}

setInterval(runFunction, 1000);


(async () => {
    const now = new Date();
    const data = await
        Promise.all([
            fetch('http://worldtimeapi.org/api/timezone/America/Boise').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/America/Chicago').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/America/Lima').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/America/Los_Angeles').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/America/New_York').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/America/Puerto_Rico').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Europe/Berlin').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Europe/Bucharest').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Europe/London').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Africa/Algiers').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Africa/Bissau').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Africa/Cairo').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Africa/Juba').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Asia/Dubai').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Asia/Hong_Kong').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Australia/Darwin').then(response => response.json()),
            fetch('http://worldtimeapi.org/api/timezone/Australia/Sydney').then(response => response.json()),

        ]);

    // for (const time of data) {
    //     const div = document.createElement("div");
    //     div.textContent = time.datetime;
    //     document.body.appendChild(div);

    // }

    var timeDiv = document.querySelectorAll('.time-div')
    console.log(timeDiv)

    for (var i = 0; i < timeDiv.length; i++) {
        var time = data;
        console.log(time[i].datetime);
        timeDiv.textContents = time[i].datetime;
    }

})();




 const eu = [
    fetch('http://worldtimeapi.org/api/timezone/Europe/London').then(response => response.json()),
     fetch('http://worldtimeapi.org/api/timezone/Europe/Berlin').then(response => response.json()),
     fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/Europe/Bucharest').then(response => response.json())]

const na = [
    fetch('http://worldtimeapi.org/api/timezone/America/New_York').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/America/Chicago').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/America/Boise').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/America/Los_Angeles').then(response => response.json()),
]

const as = [
    fetch('http://worldtimeapi.org/api/timezone/Asia/Dubai').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/Asia/Hong_Kong').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata').then(response => response.json()),
]

const aus = [
    fetch('http://worldtimeapi.org/api/timezone/Australia/Sydney').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/Australia/Darwin').then(response => response.json()),
]

const sa = [
    fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/America/Lima').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/America/Puerto_Rico').then(response => response.json()),
]

const af = [
    fetch('http://worldtimeapi.org/api/timezone/Africa/Algiers').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/Africa/Cairo').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/Africa/Juba').then(response => response.json()),
    fetch('http://worldtimeapi.org/api/timezone/Africa/Bissau').then(response => response.json()),
]
