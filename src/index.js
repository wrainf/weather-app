import loadPage from './loadPage';
import './style.css';
import loadMainWeatherContainer from './loadMainWeatherContainer';

document.body.appendChild(loadPage());
const main = document.querySelector('#main');
main.appendChild(loadMainWeatherContainer());

async function getWeather() {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=2a3e6417c89470aaa7587fa599ac7255');
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeather();
