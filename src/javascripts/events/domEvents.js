// import firebase from 'firebase/app';
import 'firebase/auth';
import showJokes from '../components/cards/showjokes';
import showWeather from '../components/cards/showWeather';
import getJokes from '../helpers/data/jokeCall';
import { weatherCall } from '../helpers/data/weatherCall';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('weather-location-submit')) {
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
      // }}
    }
    if (e.target.id.includes('random-joke-submit')) {
      getJokes()
        .then((joke) => showJokes(joke));
    }
  });
};

export default domEvents;
