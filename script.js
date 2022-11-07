<<<<<<< HEAD
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = '9NJJ7iEc4_R9xkuz-VC8gAP1Q3Crg13pwzYmpakr3gQ';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
    console.log('image loaded');
    imagesLoaded++;
    console.log(imagesLoaded);
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log('ready =', ready);
    }
}


// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create Elements For Link & Photos, Add to DOM
function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('total images',totalImages);
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.description,
            title: photo.description,
        });
        // Event Listener, check when each is finished loading
        img.addEventListener('load', imageLoaded);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    }catch(error) {
        // Catch error here
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () =>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos()
    }
});

// On Load
getPhotos()

=======
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = '9NJJ7iEc4_R9xkuz-VC8gAP1Q3Crg13pwzYmpakr3gQ';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create Elements For Link & Photos, Add to DOM
function displayPhotos(){
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.description,
            title: photo.description,
        });
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    }catch(error) {
        // Catch error here
    }
}

// On Load
getPhotos()

>>>>>>> 3a73c5c6caa721e9804df5e8353304fc1eb8d683
