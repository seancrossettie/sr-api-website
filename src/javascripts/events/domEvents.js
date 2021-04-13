import firebase from 'firebase/app';
import 'firebase/auth';
import showWeather from '../components/showWeather';
import { newFirebaseWeatherObj, weatherCall } from '../helpers/data/weatherCall';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('weather-location-submit')) {
      const weatherLocation = document.querySelector('#weather-location-input').value;
      const firebaseWeatherObj = {
        location: document.querySelector('#weather-location-input').value,
        uid: firebase.auth().currentUser.uid,
      };
      if (weatherLocation) {
        weatherCall(weatherLocation)
          .then((weather) => showWeather(weather));
        newFirebaseWeatherObj(firebaseWeatherObj);
        document.querySelector('#weather-location-input').value = '';
      }
    }
  });
};

export default domEvents;
