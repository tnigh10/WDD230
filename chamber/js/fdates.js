const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;

const d = new Date();
let year = d.getFullYear();
document.getElementById("copyr").innerHTML = `@ ${year} Lake Elmo Chamber .:|:. Troy Nightingale .:|:. WDD230 Project`;