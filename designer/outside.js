function weatherUpdate(response) {
  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#temp-number");
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#type");
  descriptionElement.innerHTML= response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML= `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind-speed");
windElement.innerHTML=`${response.data.wind.speed}mph`;

  let clockElement = document.querySelector("#clock-day");
  let date = new Date(response.data.time * 1000);
  clockElement.innerHTML = formatDate(date);
let weatherPic = document.querySelector("#weather-pic");
  weatherPic .innerHTML= `<img src=${response.data.condition.icon_url} class="iconPic"/>`;
  
}

function formatDate(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = weekDays[date.getDay()];

  if(minutes <10){minutes = `0${minutes}`;}

  return `${day} ${hours}:${minutes}`;

}

function cityLookUp(city) {
  let apiKey = "59b3e3d0a54fofe83cd678bccc0837t3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(weatherUpdate);
}

function findFormResults(event) {
  event.preventDefault();
  let barSearcher = document.querySelector("#search-bar");
  let cityNameElement = document.querySelector("#city-name");
  cityNameElement.innerHTML = barSearcher.value;
  cityLookUp(barSearcher.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", findFormResults);
