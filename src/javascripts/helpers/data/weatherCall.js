import axios from 'axios';
import firebaseConfig from '../apiKeys';

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

export default weatherCall;
