function weatherUpdate(response) {
  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#temp-number");
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;
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
