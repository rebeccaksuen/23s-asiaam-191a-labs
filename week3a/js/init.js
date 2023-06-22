// declare the map
const map = L.map('the_map').setView([35,-119], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(33.5427, -117.7854,'Laguna Beach','Nice hiking trails and views')
addMarker(34.0356, -118.5359,'Will Rogers State Beach','Close to UCLA!')
addMarker(34.0259, -118.7798,'Malibu Beach','Secluded and quiet :)')
addMarker(32.6848, -117.1878,'Coronado Beach','Next to a historic hotel!')
addMarker(35.579912, -121.1168, 'Moonstone Beach','Where you can find moonstones and seaglass on the shore')

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton);
}
createButtons(33.5427, -117.7854,'Laguna Beach')
createButtons(34.0356, -118.5359,'Will Rogers State Beach')
createButtons(34.0259, -118.7798,'Malibu Beach')
createButtons(32.6848, -117.1878,'Coronado Beach')
createButtons(35.579912, -121.1168, 'Moonstone Beach')