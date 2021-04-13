import domBuilder from '../components/domBuilder';
import weatherForm from '../components/forms/weatherForm';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  logoutButton();
  domBuilder();
  weatherForm();
  domEvents(user.uid);
};

export default startApp;
