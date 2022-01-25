import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('main', { path: '/main-profile' });
  this.route('secondary', { path: '/secondary-profile' });
});
