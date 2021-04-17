// import firebase from 'firebase/app';
import 'firebase/auth';
import showWeather from '../components/showWeather';
import { weatherCall } from '../helpers/data/weatherCall';

const domEvents = () => {
  document.querySelector('#weather-location-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const weatherLocation = document.querySelector('#weather-location-input').value;
    // const firebaseWeatherObj = {
    //   location: document.querySelector('#weather-location-input').value,
    //   uid: firebase.auth().currentUser.uid,
    // };
    if (weatherLocation) {
      weatherCall(weatherLocation)
        .then((weather) => showWeather(weather));
      // newFirebaseWeatherObj(firebaseWeatherObj);
      document.querySelector('#weather-location-input').value = '';
    }

    // if (e.target.id.includes('#untrack-weather')) {
    //   const firebaseKey = e.target.id.split('--')[1];
    //   console.warn(firebaseKey);
    // }
  });
};

export default domEvents;
