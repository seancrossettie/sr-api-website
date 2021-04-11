import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';

const startApp = () => {
  logoutButton();
  domBuilder();
  domEvents();
};

export default startApp;
