import domBuilder from '../components/domBuilder';
import weatherForm from '../components/forms/weatherForm';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import { getAllWeatherCall } from '../helpers/data/weatherCall';

const startApp = (user) => {
  logoutButton();
  domBuilder();
  weatherForm();
  domEvents();
  getAllWeatherCall(user.uid);
};

export default startApp;
