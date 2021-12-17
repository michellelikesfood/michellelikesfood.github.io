import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('kevin', { path: '/kevin-rojas' });
  this.route('jiamin', { path: '/jiamin-shi' });
  this.route('jessica', { path: '/jessica-delgado' });
  this.route('unaiza', { path: '/unaiza-nizami' });
  this.route('mehruj', { path: '/mehruj-kamal' });
});
