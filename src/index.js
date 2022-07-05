import loadPage from './loadPage';
import './style.css';
import loadMainWeatherContainer from './loadMainWeatherContainer';

document.body.appendChild(loadPage());
const main = document.querySelector('#main');
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

async function getWeather() {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&APPID=2a3e6417c89470aaa7587fa599ac7255');
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
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

async function setData() {
  const weatherData = await getWeather();
  temperatureDiv.textContent = weatherData.main.temp;
  cityDiv.textContent = weatherData.name;
  const date = getDate(weatherData.timezone);
  setTime(date);
}

setData();
