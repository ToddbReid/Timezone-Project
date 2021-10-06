var localTime = new Date().toLocaleString(); 
    var localTimeDiv = document.querySelector('#local-time');
    localTimeDiv.innerHTML = localTime;


var runFunction = function () {
    var localTime = new Date().toLocaleString(); 
    var localTimeDiv = document.querySelector('#local-time');
    localTimeDiv.innerHTML = localTime;
}

setInterval(runFunction,1000);




fetch('http://worldtimeapi.org/api/timezone/Europe/London')
 .then(response => {
   return response.json();
})
.then(users => {
  console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/Europe/Berlin')
 .then(response => {
   return response.json();
})
.then(users => {
console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow')
.then(response => {
  return response.json();
})
.then(users => {
     console.log(users);
  });

fetch('http://worldtimeapi.org/api/timezone/Europe/Bucharest')
.then(response => {
  return response.json();
})
.then(users => {
  console.log(users);
});

 fetch('http://worldtimeapi.org/api/timezone/America/New_York')
.then(response => {
  return response.json();
})
.then(users => {
 console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/America/Chicago')
.then(response => {
 return response.json();
})
.then(users => {
  console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/America/Boise')
.then(response => {
  return response.json();
})
.then(users => {
 console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/America/Los_Angeles')
.then(response => {
 return response.json();
})
.then(users => {
  console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/America/New_York')
.then(response => {
return response.json();
})
.then(users => {
 console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/Asia/Dubai')
 .then(response => {
   return response.json();
})
.then(users => {
 console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/Asia/Hong_Kong')
.then(response => {
 return response.json();
})
.then(users => {
  console.log(users);
});

   fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo')
.then(response => {
 return response.json();
})
.then(users => {
  console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/Asia/Mumbai')
.then(response => {
 return response.json();
})
.then(users => {
  console.log(users);
});

fetch('http://worldtimeapi.org/api/timezone/Australia/Sydney')
    .then(response => {
       return response.json();
    })
   .then(users => {
       console.log(users);
   });

fetch('http://worldtimeapi.org/api/timezone/Australia/Darwin')
    .then(response => {
       return response.json();
    })
    .then(users => {
       console.log(users);
    });

    fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires')
    .then(response => {
       return response.json();
   })
    .then(users => {
       console.log(users);
   });

   fetch('http://worldtimeapi.org/api/timezone/America/Lima')
    .then(response => {
       return response.json();
   })
   .then(users => {
       console.log(users);
   });

    fetch('http://worldtimeapi.org/api/timezone/America/Puerto_Rico')
    .then(response => {
       return response.json();
   })
    .then(users => {
       console.log(users);
    });

   fetch('http://worldtimeapi.org/api/timezone/Africa')
    .then(response => {
       return response.json();
    })
    .then(users => {
       console.log(users);
    });

    fetch('http://worldtimeapi.org/api/timezone/Africa/Algiers')
    .then(response => {
       return response.json();
    })
    .then(users => {
       console.log(users);
    });

    fetch('http://worldtimeapi.org/api/timezone/Africa/Cairo')
    .then(response => {
       return response.json();
    })
    .then(users => {
       console.log(users);
    });

    fetch('http://worldtimeapi.org/api/timezone/Africa/Juba')
    .then(response => {
       return response.json();
    })
    .then(users => {
       console.log(users);
   });

    fetch('http://worldtimeapi.org/api/timezone/Africa/Bissau')
    .then(response => {
       return response.json();
    })
    .then(users => {
       console.log(users);
   });