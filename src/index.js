import loadPage from './loadPage';
import './style.css';
import loadMainWeatherContainer from './loadMainWeatherContainer';
import boxDeatils from './boxDetails';

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
  hourDiv.textContent = date.getHours();
  minuteDiv.textContent = date.getMinutes();
  dayDiv.textContent = weekday[date.getDay()];
  dateDiv.textContent = date.getDate();
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
  searchBtn.textContent = 'Search';
  searchBtn.addEventListener('click', () => {
    const location = search.value;
    depopulateSidebar();
    setData(location);
  });

  searchContainer.appendChild(search);
  searchContainer.appendChild(searchBtn);
  return searchContainer;
}

function populateSidebar(weatherData) {
  sidebar.appendChild(createSearch());
  sidebar.appendChild(boxDeatils('Feels Like', `${weatherData.main.feels_like}°`));
  sidebar.appendChild(boxDeatils('High', `${weatherData.main.temp_max}°`));
  sidebar.appendChild(boxDeatils('Low', `${weatherData.main.temp_min}°`));
  sidebar.appendChild(boxDeatils('Humidity', `${weatherData.main.humidity}%`));
  sidebar.appendChild(boxDeatils('Pressure', `${weatherData.main.humidity}hPa`));
  sidebar.appendChild(boxDeatils('Wind', `${weatherData.wind.speed}m/s`));
}

async function setData(location) {
  try {
    const weatherData = await getWeather(location);
    temperatureDiv.textContent = `${weatherData.main.temp}°`;
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
