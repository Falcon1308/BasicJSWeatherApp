const but = document.querySelector(".submit");
let city = document.querySelector(".cityName");
let loc = document.querySelector(".cityLoc");
let temp = document.querySelector(".tempID");
let desc = document.querySelector(".tempDes");

function pressEnter(event) {
    if(event.which === 13) {
        showWeather()
    }
}

function showWeather() {
    if (city.value !== "") {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=1265ea02115ec456d0b20b6945b3a44a`;
        //console.log(api);
        
        fetch (api) 
            .then (response => {
                return response.json();
            })
            .then (data => {
                if (data.cod != 404) {
                    console.log(data);
                    loc.textContent = city.value;
                    temp.textContent = `${data.main.temp} °c`;
                    desc.textContent = data.weather[0].description;
                } else {
                    temp.textContent = "City not found"
                    loc.textContent = "";
                    desc.textContent = "";
                }
            })
    }

    
};