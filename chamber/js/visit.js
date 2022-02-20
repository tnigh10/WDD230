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
// todayDisplay.textContent = Date.now();


// Initialize day counter
todayDisplay.textContent = Date();
//const todayDisplay = document.querySelector(".today");

// get the stored value in localStorage
var numDays = String(window.localStorage.getItem("date-stored"));

// To calculate the time difference of two dates
var Difference_In_Time = todayDisplay.getTime() - numDays.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// determine how many days ago you last visited.
if ( Difference_In_Days !== 0) {
    
    todayDisplay.textContent = Difference_In_Days;
  } else {
    todayDisplay.textContent = `You were here earlier today!`;
  }

  // Set new date for numDays
  numDays = Date();

  // store the new date of last visit value
localStorage.setItem("date-stored", numDays);




