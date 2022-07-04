function loadMainWeatherContainer() {
  const container = document.createElement('div');
  const temp = document.createElement('div');
  const locationDetails = document.createElement('div');
  const city = document.createElement('div');
  const dayDetails = document.createElement('div');
  const time = document.createElement('div');
  const date = document.createElement('div');
  const weather = document.createElement('div');

  dayDetails.appendChild(time);
  dayDetails.appendChild(date);
  locationDetails.appendChild(city);
  locationDetails.appendChild(dayDetails);

  temp.setAttribute('id', 'temperature');
  city.setAttribute('id', 'city');
  time.setAttribute('id', 'time');
  date.setAttribute('id', 'date');
  weather.setAttribute('id', 'weather');

  locationDetails.setAttribute('id', 'location-details');
  dayDetails.setAttribute('id', 'day-details');

  container.appendChild(temp);
  container.appendChild(locationDetails);
  container.appendChild(weather);
  container.setAttribute('id', 'main-weather');
  return container;
}

export default loadMainWeatherContainer;
