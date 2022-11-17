let apiKey = `97c2f6a3b34509ac62090edc5d18d949`;

function weather(response) {
  let cityTempchange = document.querySelector(".temperature");
  let cityHumiditychange = document.querySelector(".humidityValue");
  let cityPressurechange = document.querySelector(".pressureValue");
  let cityWindchange = document.querySelector(".windValue");
  let cityTemp = Math.round(response.data.main.temp);
  let cityHum = Math.round(response.data.main.humidity);
  let cityPres = Math.round(response.data.main.pressure);
  let cityWind = response.data.wind.speed;
  let cityNamechange = document.querySelector("h1");
  let cityName = response.data.name;
  cityNamechange.innerHTML = cityName;
  cityTempchange.innerHTML = cityTemp;
  cityHumiditychange.innerHTML = `${cityHum}%`;
  cityPressurechange.innerHTML = `${cityPres} hPa`;
  cityWindchange.innerHTML = `${cityWind} m/s`;
}

function searchInput(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let citychange = document.querySelector("h1");
  citychange.innerHTML = city.value;
  let weatherMetric = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(weatherMetric).then(weather);
}
let searchcity = document.querySelector("#searchbutton");
searchcity.addEventListener("submit", searchInput);

let date = new Date();
let days = date.getDay();
let day = [
  "Sunday",
  "Monday",
  "Tuesay",
  "Wednsrday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = date.getHours();
let minutes = date.getMinutes();
let today = document.querySelector("#today-day");
let todaydate = `${day[days]} ${hours}:${minutes}`;
today.innerHTML = todaydate;

function myPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiPosition).then(weather);
}
function currentposition() {
  navigator.geolocation.getCurrentPosition(myPosition);
}
let gps = document.querySelector(".gpsButton");
gps.addEventListener("click", currentposition);

//function changeFerenheit(event) {
//event.preventDefault();
//let changeTemp = document.querySelector(".temperature");
//changeTemp.innerHTML = 88;
//}

//let changeUnit = document.querySelector("#farenheit");
//changeUnit.addEventListener("click", changeFerenheit);

//function changeCelsi(event) {
//event.preventDefault();
//let changeTempFerenheit = document.querySelector(".temperature");
//changeTempFerenheit.innerHTML = 20;
//}
//let changeUnitFerenheit = document.querySelector("#celsi");
//changeUnitFerenheit.addEventListener("click", changeCelsi);
