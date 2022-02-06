const datefield = document.getElementById("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<strong>${fulldate}</strong>`;

/*banner JS */
const day = current.getDay();
const banner = document.querySelector('#banner')
console.log(day)
if (day == 1 || day == 2) {
  banner.classList.add('show')
}
else {
  banner.classList.add('hide')
}