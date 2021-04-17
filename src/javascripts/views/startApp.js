import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
// import { getAllWeatherCall } from '../helpers/data/weatherCall';

const startApp = () => {
  logoutButton();
  domBuilder();
  navbar();
  navEvents();
  domEvents();
  // getAllWeatherCall(user.uid);
};

export default startApp;
