
const requestURL = "data/data2.json"
const spotlight = document.querySelector(".spotlight")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        const temple = temples[Math.floor(Math.random() * temples.length)];
        
       //h4 Name
       let head = document.createElement('h4');
       head.textContent = temple.name;
       spotlight.appendChild(head);

       
          //img Temple photo
        let image = document.createElement('img');
        image.src = temple.imageurl;
        image.setAttribute('alt', temple.name);
        spotlight.appendChild(image);

        
         // Phone
        let pphone = document.createElement("p");
        pphone.innerHTML = `Phone: ${temple.phone}`;
        spotlight.appendChild(pphone);

         // Website
        let psite = document.createElement("a");
        psite.innerHTML = `${temple.name} Website`;
        psite.setAttribute("href", temple.website);
        spotlight.appendChild(psite);

        

        });
