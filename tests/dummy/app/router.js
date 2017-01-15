import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

/* eslint-disable array-callback-return */
Router.map(function() {
});
/* eslint-enable array-callback-return */

export default Router;
