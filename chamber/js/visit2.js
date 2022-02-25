


const todayDisplay = document.querySelector(".today");


// Initialize day counter
//var sessionTime.textContent = Date.now();
//const todayDisplay = document.querySelector(".today");

if ( localStorage.getItem("sessionTime") != "0" ) {
    localStorage.setItem("lastSession", sessionTime);
    var now = Date.now();
    localStorage.setItem("sessionTime",now);
}

var diffTime = sessionTime - lastSession
var diffDays = diffTime / (1000 * 3600 * 24);
//document.write(diffDays);
todayDisplay.textContent = diffDays;


// get the stored value in localStorage
var numDays = String(window.localStorage.getItem("date-stored"));

// To calculate the time difference of two dates
var Difference_In_Time = todayDisplay.getTime() - numDays.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// determine how many days ago you last visited.
if ( Difference_In_Days !== 0) {
    document.write(Difference_In_Days);
    //todayDisplay.textContent = Difference_In_Days;
  } else {
    todayDisplay.textContent = `You were here earlier today!`;
  }




// store the new date of last visit value
localStorage.setItem("date-stored", numDays);
