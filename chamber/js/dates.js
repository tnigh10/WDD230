const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

/*Date in header*/
const datefieldUK = document.querySelector("date");

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

/*banner JS */
const day = current.getDay();
const banner = document.querySelector('#banner')
console.log(day)
if (day == 5 || day == 6) {
  banner.classList.add('show')
}
else {
  banner.classList.add('hide')
}