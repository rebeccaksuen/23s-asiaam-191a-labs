// var mario = 3;
//         var age = 12;
//         var combined= mario + age
//         console.log(combined)
//         console.log('Hello Asian Am 191 from linked JavaScript! :)')

console.log("H÷ello Asia-Am 191A! :)")

// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 15); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let marker = L.marker([34.0709, -118.444]).addTo(map) 
        .bindPopup('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I work in ')
        .openPopup();

        function addMarker(lat,lng,message){ 
            console.log(message) 
            L.marker([lat,lng]).addTo(map).bindPopup(message) 
            return message 
        }
        