// initialize visit elements
const visitsDisplay = document.querySelector(".visits");
const todayDisplay = document.querySelector(".today");

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
// todayDisplay.textContent = Date.now();


// Initialize day counter
//todayDisplay.textContent = Date();
//const todayDisplay = document.querySelector(".today");

const lastvisit_text = window.localStorage.getItem('lastvisit');
if(lastvisit_text === undefined) {
    lastvisit_text = new Date(Data.now());
}
const lastvisit = Date.parse(lastvisit_text);
const FACTOR = 1000 * 60 * 60 * 24;


let daysbetween = Date.now() - lastvisit;
let numberOfDays = daysbetween / FACTOR;

window.localStorage.setItem('lastvisit', new Date(Date.now()));

const daysSinceVisit = Math.floor(numberOfDays);
document.getElementById('lastvisit').textContent = daysSinceVisit;


