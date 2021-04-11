import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  logoutButton();
  domBuilder();
  domEvents(user.uid);
};

export default startApp;
