import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Sum extends Service {
  @tracked total = 1;

  addToTotal() {
    this.total = this.total + 1;
  }
}
