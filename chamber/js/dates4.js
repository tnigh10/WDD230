const datefield = document.getElementById("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<strong>${fulldate}</strong>`;

/*banner JS */
/*const day = now.getDay();
const banner = document.querySelector("banner")
const banner = document.getElementById("banner")
console.log(day)
if (day == 4 || day == 3) {
  banner = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}
else {
  banner = ""
}
document.querySelector('#banner').textContent = banner;*/

/*/*banner*/
const today = new Date();
let dayOfWeek;
dayOfWeek = today.getDay();
let banner;
if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner = ' Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
} else {
    banner = '';
}
document.querySelector('#banner').textContent = banner;
