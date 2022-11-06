// Unsplash API
const count = 10;
const apiKey = '9NJJ7iEc4_R9xkuz-VC8gAP1Q3Crg13pwzYmpakr3gQ';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    }catch(error) {
        // Catch error here
    }
}

// On Load
getPhotos()

