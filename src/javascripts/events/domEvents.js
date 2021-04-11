import showWeather from '../components/showWeather';
import weatherCall from '../helpers/data/weatherCall';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('weather-location-submit')) {
      e.preventDefault();
      const weatherLocation = document.querySelector('#weather-location-input').value;
      if (weatherLocation) {
        weatherCall(weatherLocation)
          .then((weather) => showWeather(weather));
      } else {
        e.preventDefault();
      }
    }
  });
};

export default domEvents;
