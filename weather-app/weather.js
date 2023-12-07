const apiKey = "27120ac78584edf79f4797789bee1cac";
var data;
async function checkWeather(apiUrl) {
  const response = await fetch(apiUrl);
  data = await response.json();
  console.log(this.data);
  fetchData();
}
function searchCity() {
  var city = document.getElementById("cityName").value
    ? document.getElementById("cityName").value
    : (document.getElementById("cityName").value = "Pune");
  console.log(city);
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  checkWeather(apiUrl);
}
function fetchData() {
  document.getElementsByClassName("city")[0].innerHTML = this.data.name;
  //document.getElementById('city').innerHTML=this.data.name;
  document.getElementById("temp").innerHTML = `${this.data.main.temp}C`;
  document.getElementById("humidity").innerHTML = `${this.data.main.humidity}%`;
  document.getElementById("wind").innerHTML = `${this.data.wind.speed}km/h`;
  displayImg();
}
function displayImg() {
  if (this.data.weather[0].main === "Clouds") {
    document.getElementById("image").src = "images/clouds.png";
  } else if (this.data.weather[0].main === "Clear") {
    document.getElementById("image").src = "images/clear.png";
  } else if (this.data.weather[0].main === "Rain") {
    document.getElementById("image").src = "images/rain.png";
  } else if (this.data.weather[0].main === "Haze") {
    document.getElementById("image").src = "images/drizzle.png";
  } else if (this.data.weather[0].main === "Mist") {
    document.getElementById("image").src = "images/mist.png";
  } else {
    document.getElementById("image").src = "images/snow.png";
  }
}
searchCity();
