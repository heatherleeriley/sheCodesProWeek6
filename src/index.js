let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[date.getDay()];
let currentDate = document.querySelector(".currentTime");
currentDate.innerHTML = `${currentDay}  ${currentHour}:${currentMinute}`;

function displayInputCityTemp(response) {
  let temperatureElement = document.querySelector("#today-temp");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-input");
  let city = searchInputElement.value;
  let apiKey = "263ctda5b6f104dbbf7ofc6f7838219f";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(displayInputCityTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
