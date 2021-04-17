import domBuilder from '../components/domBuilder';
import weatherForm from '../components/forms/weatherForm';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navBar';
import domEvents from '../events/domEvents';
// import { getAllWeatherCall } from '../helpers/data/weatherCall';

const startApp = () => {
  logoutButton();
  domBuilder();
  navbar();
  weatherForm();
  domEvents();
  // getAllWeatherCall(user.uid);
};

export default startApp;
