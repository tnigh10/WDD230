// initialize visit elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-stored"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-stored", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();


// Initialize day counter
const todayDisplay = document.querySelector(".today");

// get the stored value in localStorage
let dayVisits = Number(window.localStorage.getItem("days-stored"));

