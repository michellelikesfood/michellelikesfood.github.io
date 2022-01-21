import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default class Example extends Component {
  @tracked total = 1;

  @service('sum') sumService;

  @alias('sumService.total') serviceTotal;

  @action
  addToTotal() {
    this.sumService.addToTotal();
  }
}
