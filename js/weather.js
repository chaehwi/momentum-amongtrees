const API_KEY = "d0c8b93b394c4947c9f8d46e5bf75959";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather div:first-child");
        const weather = document.querySelector("#weather span");
        const temp = document.querySelector("#weather div:last-child");
        city.textContent = `${data.name}`; 
        weather.textContent = `${ data.weather[0].main}`;
        temp.textContent =  `${data.main.temp}℃`;
    });
}

function onGeoError(){
alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
