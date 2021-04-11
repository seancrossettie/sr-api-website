const showWeather = (weatherObject) => {
  document.querySelector('#weather-cards').innerHTML += `
  <div class="card" style="width: 18rem;">
    <img src="http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png" class="card-img-top" alt="weather-update">
    <div class="card-body">
      <h5 class="card-title">${weatherObject.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${weatherObject.weather[0].description}</li>
      <li class="list-group-item">Temperature: ${Math.round((((weatherObject.main.temp - 273.15) * 1.8) + 32))} °F</li>
    </ul>
  </div>
  `;
};

export default showWeather;
