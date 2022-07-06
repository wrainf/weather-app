import loadPage from './loadPage';
import './style.css';
import loadMainWeatherContainer from './loadMainWeatherContainer';
import createSidebar from './createSidebar';

document.body.appendChild(loadPage());
const main = document.querySelector('#main');
const sidebar = document.querySelector('#sidebar');
main.appendChild(loadMainWeatherContainer());

const temperatureDiv = document.querySelector('#temperature');
const cityDiv = document.querySelector('#city');
const hourDiv = document.querySelector('#hour');
const minuteDiv = document.querySelector('#minute');
const dayDiv = document.querySelector('#day');
const dateDiv = document.querySelector('#date');
const monthDiv = document.querySelector('#month');
const mainWeather = document.querySelector('#main-weather');
const weatherImg = document.querySelector('#weather-icon');

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Octr', 'Nov', 'Dec'];
const weather = document.querySelector('#weather');

async function getWeather(location) {
  try {
    let response;
    if (typeof location === 'string') {
      response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=2a3e6417c89470aaa7587fa599ac7255`);
    } else {
      response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=metric&appid=2a3e6417c89470aaa7587fa599ac7255`);
    }

    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    return error;
  }
}

function getDate(timeOffSet) {
  const date = new Date();
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const location = utc + (1000 * timeOffSet);
  const newDate = new Date(location);
  return newDate;
}

function setTime(date) {
  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  hourDiv.textContent = (hours.length >= 2) ? `${hours}` : `0${hours}`;
  minuteDiv.textContent = (minutes.length >= 2) ? `:${minutes}` : `:0${minutes}`;
  dayDiv.textContent = `${weekday[date.getDay()]}-`;
  dateDiv.textContent = `${date.getDate()}-`;
  monthDiv.textContent = months[date.getMonth()];
}

sidebar.appendChild(createSearch());
const weatherTitle = document.createElement('div');
weatherTitle.textContent = 'Weather Details';
weatherTitle.setAttribute('id', 'weather-title');
sidebar.appendChild(weatherTitle);
createSidebar();
const sidebarValues = document.querySelector('#sidebar-container');

function createSearch() {
  const searchContainer = document.createElement('div');
  const search = document.createElement('input');
  const searchBtn = document.createElement('button');

  searchBtn.setAttribute('id', 'search-btn');
  search.setAttribute('id', 'search-bar');
  search.setAttribute('placeholder', 'Enter city name');
  searchBtn.addEventListener('click', () => {
    const location = search.value;
    setData(location);
    main.removeChild(mainWeather);
    main.appendChild(mainWeather);
    sidebar.removeChild(sidebarValues);
    sidebar.appendChild(sidebarValues);
  });

  searchContainer.appendChild(search);
  searchContainer.appendChild(searchBtn);
  searchContainer.setAttribute('id', 'search-container');
  return searchContainer;
}

function populateSidebar(weatherData) {
  const boxValues = document.querySelectorAll('#value');
  const data = [`${Math.ceil(weatherData.main.feels_like)}°`, `${Math.ceil(weatherData.main.temp_max)}°`, `${Math.ceil(weatherData.main.temp_min)}°`,
    `${weatherData.main.humidity}%`, `${weatherData.main.humidity}hPa`, `${weatherData.wind.speed}m/s`];
  for (let index = 0; index < data.length; index += 1) {
    const value = data[index];
    boxValues[index].textContent = value;
  }
}

function setBackground(sunrise, sunset) {
  console.log(hourDiv.textContent);
  if (+hourDiv.textContent > +sunrise && +hourDiv.textContent < +sunset) {
    document.body.classList.add('morning');
    document.body.classList.remove('night');
  } else {
    document.body.classList.add('night');
    document.body.classList.remove('morning');
  }
}

async function setData(location) {
  try {
    const weatherData = await getWeather(location);
    const temp = Math.ceil(weatherData.main.temp);
    temperatureDiv.textContent = `${temp}°`;
    const imgID = weatherData.weather[0].icon;
    weatherImg.src = `https://openweathermap.org/img/wn/${imgID}@2x.png`;
    cityDiv.textContent = weatherData.name;
    const date = getDate(weatherData.timezone);
    setTime(date);
    weather.textContent = weatherData.weather[0].main;
    populateSidebar(weatherData);

    // changing bg
    const curDate = new Date();
    // in hours
    const localOffset = -curDate.getTimezoneOffset() / 60;
    const locationOffset = weatherData.timezone / 3600;
    const hourDif = localOffset - locationOffset;

    const sunrise = new Date(weatherData.sys.sunrise * 1000 - hourDif * 3600000);
    const sunset = new Date(weatherData.sys.sunset * 1000 - hourDif * 3600000);

    const sunriseHour = sunrise.getHours();
    const sunsetHour = sunset.getHours();

    setBackground(sunriseHour, sunsetHour);
    console.log(sunrise);
    console.log(sunsetHour);
    console.log(sunriseHour);
  } catch (error) {
    alert('Invalid City!');
  }
}

function setPosition(position) {
  setData([position.coords.latitude, position.coords.longitude]);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  }
  setData('Tokyo');
}

getLocation();
