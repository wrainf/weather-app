import loadPage from './loadPage';
import './style.css';
import loadMainWeatherContainer from './loadMainWeatherContainer';
import boxDetails from './boxDetails';

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
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=2a3e6417c89470aaa7587fa599ac7255`);
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
  hourDiv.textContent = (hours.length >= 2) ? `${hours}:` : `0${hours}:`;
  minuteDiv.textContent = (minutes.length >= 2) ? minutes : `0${minutes}`;
  dayDiv.textContent = `${weekday[date.getDay()]}-`;
  dateDiv.textContent = `${date.getDate()}-`;
  monthDiv.textContent = months[date.getMonth()];
}

function depopulateSidebar() {
  sidebar.innerHTML = '';
}

function createSearch() {
  const searchContainer = document.createElement('div');
  const search = document.createElement('input');
  const searchBtn = document.createElement('button');

  searchBtn.setAttribute('id', 'search-btn');
  search.setAttribute('id', 'search-bar');
  search.setAttribute('placeholder', 'Enter city name');
  searchBtn.addEventListener('click', () => {
    const location = search.value;
    depopulateSidebar();
    setData(location);
    main.removeChild(mainWeather);
    main.appendChild(mainWeather);
  });

  searchContainer.appendChild(search);
  searchContainer.appendChild(searchBtn);
  searchContainer.setAttribute('id', 'search-container');
  return searchContainer;
}

function populateSidebar(weatherData) {
  sidebar.appendChild(createSearch());
  const weatherTitle = document.createElement('div');
  weatherTitle.textContent = 'Weather Details';
  weatherTitle.setAttribute('id', 'weather-title');
  sidebar.appendChild(weatherTitle);
  sidebar.appendChild(boxDetails('Feels Like', `${Math.ceil(weatherData.main.feels_like)}°`));
  sidebar.appendChild(boxDetails('High', `${Math.ceil(weatherData.main.temp_max)}°`));
  sidebar.appendChild(boxDetails('Low', `${Math.ceil(weatherData.main.temp_min)}°`));
  sidebar.appendChild(boxDetails('Humidity', `${weatherData.main.humidity}%`));
  sidebar.appendChild(boxDetails('Pressure', `${weatherData.main.humidity}hPa`));
  sidebar.appendChild(boxDetails('Wind', `${weatherData.wind.speed}m/s`));
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
  } catch (error) {
    alert('Invalid City! Reset to default..');
    setData('London');
  }
}

setData('London');
