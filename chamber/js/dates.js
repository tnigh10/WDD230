const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


const d = new Date();
let year = d.getFullYear();
document.getElementById('#copyr').innerHTML = `@ ${year} .:|:. Troy J. Nightingale .:|:. Minnesota`;

const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;

/* Header Date */
const datefield = document.querySelector("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);