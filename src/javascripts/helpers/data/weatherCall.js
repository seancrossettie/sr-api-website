import axios from 'axios';
import firebaseConfig from '../apiKeys';

// MAKES CALL TO WEATHER DATABASE
const weatherCall = (location) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${firebaseConfig.weatherApiKey}`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// CREATES NEW LOCATION OF WEATHER IN FIREBASE
const newFirebaseWeatherObj = (location) => new Promise((reject) => {
  axios.post('https://sr-api-website-default-rtdb.firebaseio.com/weather.json', location)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`https://sr-api-website-default-rtdb.firebaseio.com/weather/${response.data.name}.json`, body);
    })
    .catch((error) => reject(error));
});

export { weatherCall, newFirebaseWeatherObj };
