import weatherCall from '../helpers/data/weatherCall';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('weather-location-submit')) {
      e.preventDefault();
      const weatherLocation = document.querySelector('#weather-location-input').value;
      weatherCall(weatherLocation)
        .then((weather) => console.warn(weather));
    }
  });
};

export default domEvents;
