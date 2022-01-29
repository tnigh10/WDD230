/* Footer Date  */
const d = new Date();
let year = d.getFullYear();
document.getElementById("#copyr").innerHTML = `@ ${year} .:|:. Troy J. Nightingale .:|:. Minnesota`;

/* Footer Last Modification  */
const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;


/*lastmod.textContent = `Last Updated: ${document.lastModified}`;*/