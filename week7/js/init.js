// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':2.5}

let yes = L.featureGroup();
let no = L.featureGroup();

let layers = {
    "yes": yes,
    "no": no
}

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQPRqwlPQiTej0JAecl62AGseYUZYTp2m_kcdNT9BwASN1C4nGXTayPSYGTxUGSaANome7CwLJduCfw/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

let Jawg_Light = L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

Jawg_Light.addTo(map);

function addMarker(data){
    if(data['Is the dessert spot in California?'] == "yes"){
        circleOptions.fillColor = "red"
       yes.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup`<h2>${data['What type of dessert does your favorite dessert spot serve?']}</h2>`)
        createButtons(data.lat,data.lng,data['Where is your favorite dessert spot located?'])
        }
    else{
        circleOptions.fillColor = "blue"
        no.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup`<h2>${data['What type of dessert does your favorite dessert spot serve?']}</h2>`)
        createButtons(data.lat,data.lng,data['Where is your favorite dessert spot located?'])
    }
    return data
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    yes.addTo(map) // add our layers after markers have been made
    no.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([yes,no]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)