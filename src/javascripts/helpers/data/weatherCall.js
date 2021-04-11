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
  axios.post(`${firebaseConfig.databaseURL}/weather.json`, location)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${firebaseConfig.databaseURL}/weather/${response.data.name}.json`, body);
    })
    .catch((error) => reject(error));
});

// READS ALL LOCATIONS IN FIREBASE BASED OFF OF UID
const getWeather = (uid) => new Promise((resolve, reject) => {
  axios.get(`${firebaseConfig.databaseURL}/weather.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export { weatherCall, newFirebaseWeatherObj, getWeather };
