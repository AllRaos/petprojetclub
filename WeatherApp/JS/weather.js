const apiKey = "3ce58b3d6bef6c62e493bce064940648";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const seachBtn = document.getElementById("seach__button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    return await response.json();
};

function infoWeather(data){
    document.getElementsByClassName("city")[0].innerHTML = data.name;
    document.getElementsByClassName("temp")[0].innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementsByClassName("num-info")[0].innerHTML = data.main.humidity + "%";
    document.getElementsByClassName("num-info")[1].innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clear"){
        document.getElementById("icons").src = "/SVG/sun.svg";
        document.getElementsByTagName("body")[0].removeAttribute("class");
    }
    else if(data.weather[0].main == "Clouds"){
        document.getElementById("icons").src = "/SVG/cloud.svg";
        document.getElementsByTagName("body")[0].removeAttribute("class");
        document.getElementsByTagName("body")[0].classList.add("clouds");
    }
    else if(data.wather[0].main == "Rain"){
        document.getElementById("icons").src = "/SVG/rain.svg";
        document.getElementsByTagName("body")[0].removeAttribute("class");
        document.getElementsByTagName("body")[0].classList.add("rain");
    }
    else if(data.wather[0].main == "Drizzle"){
        document.getElementById("icons").src = "/SVG/drizzle.svg";
        document.getElementsByTagName("body")[0].removeAttribute("class");
        document.getElementsByTagName("body")[0].classList.add("rain");
    }
    else if(data.wather[0].main == "Mist"){
        document.getElementById("icons").src = "/SVG/humidity.svg";
        document.getElementsByTagName("body")[0].removeAttribute("class");
        document.getElementsByTagName("body")[0].classList.add("clouds");
    }
}

function timeDay(){
    let data = new Date()
    let time = data.getHours()

    if(time >= 18 && time <=21){
        document.getElementsByTagName("body")[0].classList.add("even")
    }
    else if(time >= 21 || time <= 6){
        document.getElementsByTagName("body")[0].removeAttribute("class")
        document.getElementsByTagName("body")[0].classList.add("night")
        document.getElementsByClassName("wind-icon1")[0].src = "/SVG/humidity_white.svg"
        document.getElementsByClassName("wind-icon2")[0].src  = "/SVG/wind_white.svg"
    }
    else{
        document.getElementsByTagName("body")[0].removeAttribute("class")
        document.getElementsByClassName("wind-icon1")[0].src = "/SVG/humidity.svg"
        document.getElementsByClassName("wind-icon2")[0].src  = "/SVG/windy.svg"
    }
}

timeDay();

seachBtn.addEventListener("click", async ()=>{
    if(document.getElementById("seach__input").value != ""){
        const data = await checkWeather(`&q=${document.getElementById("seach__input").value}`);
        infoWeather(data);
    }
    else{
        alert("Write something!");
    }
})