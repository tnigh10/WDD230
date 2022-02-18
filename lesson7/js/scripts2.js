
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  });


  article img[data-src] {
    filter: blur(0.2em);
  }
  
  article img {
    filter: blur(0em);
    transition: filter 0.5s;
  }


 