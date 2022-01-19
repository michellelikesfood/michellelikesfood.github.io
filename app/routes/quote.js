// import Route from '@ember/routing/route';
import Ember from 'ember';
/**
 * Please fill out as needed
 */
export default Ember.Route.extend({
  model() {
  return this.store.findAll('quotes');
  }
});
