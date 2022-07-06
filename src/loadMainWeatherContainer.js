function loadMainWeatherContainer() {
  const container = document.createElement('div');
  const temp = document.createElement('div');
  const locationDetails = document.createElement('div');
  const city = document.createElement('div');
  const dayDetails = document.createElement('div');
  const time = document.createElement('div');
  const fullDate = document.createElement('div');
  const weather = document.createElement('div');
  const weatherContainer = document.createElement('div');
  const weatherIcon = document.createElement('img');

  dayDetails.appendChild(time);
  dayDetails.appendChild(fullDate);
  locationDetails.appendChild(city);
  locationDetails.appendChild(dayDetails);

  temp.setAttribute('id', 'temperature');
  city.setAttribute('id', 'city');
  time.setAttribute('id', 'time');
  fullDate.setAttribute('id', 'fullDate');
  weather.setAttribute('id', 'weather');

  locationDetails.setAttribute('id', 'location-details');
  dayDetails.setAttribute('id', 'day-details');

  const hour = document.createElement('div');
  const minute = document.createElement('div');
  hour.setAttribute('id', 'hour');
  minute.setAttribute('id', 'minute');
  time.appendChild(hour);
  time.appendChild(minute);

  const day = document.createElement('div');
  const date = document.createElement('div');
  const month = document.createElement('div');
  day.setAttribute('id', 'day');
  date.setAttribute('id', 'date');
  month.setAttribute('id', 'month');

  fullDate.appendChild(day);
  fullDate.appendChild(date);
  fullDate.appendChild(month);

  weatherIcon.setAttribute('id', 'weather-icon');
  weatherContainer.appendChild(weatherIcon);
  weatherContainer.appendChild(weather);
  weatherContainer.setAttribute('id', 'weather-container');

  container.appendChild(temp);
  container.appendChild(locationDetails);
  container.appendChild(weatherContainer);
  container.setAttribute('id', 'main-weather');
  return container;
}

export default loadMainWeatherContainer;
