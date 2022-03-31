



const apiURL = 
//"https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=6372b6b36f7750dfbbd98d6862f27c37&units=imperial";
"https://api.openweathermap.org/data/2.5/onecall?lat=44.98022&lon=-92.96530&exclude=hourly&appid=6372b6b36f7750dfbbd98d6862f27c37&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector("#current-temp").textContent = jsObject.daily[0].temp.day.toFixed(0);
    document.querySelector("#current-wind").textContent = jsObject.current.wind_speed.toFixed(1);
    document.querySelector("#feels-like").textContent = jsObject.current.feels_like.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    const desc = jsObject.daily[0].weather[0].description;
    //document.querySelector("#icon-src").textContent = iconsrc;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;


    let t = parseFloat(document.querySelector("#current-temp").textContent);
    let s = parseFloat(document.querySelector("#current-wind").textContent);
    let windchill = "";
    
    if (t <= 50 && s >= 3) {
        windchill = windChill(t, s);
        windchill = `${windchill}&#176;F`;
    }   else {
        windchill = "N/A";
    }
    
    //  The output
    document.querySelector("#w").innerHTML = windchill;
    
    
    function windChill(t, s) {
        windchill = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
        return windchill.toFixed(0);
    }

  });

  


  //let temp = document.createElement("p");

  //temp.setAttribute("class", "temperature");

 // card.appendChild(temp);

  //document.querySelector("div.cards").appendChild(card);



//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}


//API key   6372b6b36f7750dfbbd98d6862f27c37 