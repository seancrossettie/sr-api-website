import jokeForm from '../components/forms/jokesForm';
import weatherForm from '../components/forms/weatherForm';

const navEvents = () => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('weather-nav-link')) {
      weatherForm();
    }
    if (e.target.id.includes('jokes-nav-link')) {
      jokeForm();
    }
  });
};

export default navEvents;
