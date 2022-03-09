


const apiURL = 
"https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=6372b6b36f7750dfbbd98d6862f27c37&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector("#current-temp").textContent = jsObject.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector("#icon-src").textContent = iconsrc;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;


  });

  
  //let temp = document.createElement("p");

  //temp.setAttribute("class", "temperature");

 // card.appendChild(temp);

  //document.querySelector("div.cards").appendChild(card);



//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}


//API key   6372b6b36f7750dfbbd98d6862f27c37 