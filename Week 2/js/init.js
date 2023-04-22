// var mario = 3;
//         var age = 12;
//         var combined= mario + age
//         console.log(combined)
//         console.log('Hello Asian Am 191 from linked JavaScript! :)')

console.log("Hello Asia-Am 191A! :)")

// JavaScript const variable declaration
const map = L.map('the_map').setView([1.352083, 103.819839], 15); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let marker = L.marker([1.352083, 103.819839]).addTo(map) 
        .bindPopup('Singapore: Where I studied abroad last summer!')
        .openPopup();

        function addMarker(lat,lng,message){ 
            console.log(message) 
            L.marker([lat,lng]).addTo(map).bindPopup(message) 
            return message 
        }
addMarker(34.414668,-118.556890,'Santa Clarita: My hometown!')
addMarker(11.584790,122.753212,"Roxas City, Philippines: My Mom's hometown")
addMarker(34.068920,-118.445183,'UCLA: School')
addMarker(37.453220,-122.183220,"Menlo Park: My Dad's hometown")
                