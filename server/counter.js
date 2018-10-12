import Photon from './photon';

export default class Counter {
  constructor() {
    this.count = 0;
    this.limit = process.env.LIMIT || 5;
    this.photon = new Photon();
  }

  reset() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(`\nCount: ${this.count}\nLimit:${this.limit}\n`);
    if (this.count === this.limit) {
      console.log('Limit reached!!');
      this.photon.trigger();
    }
  }

  status() {
    let percent = this.count / this.limit;
    return parseInt(percent * 100, 10);
  }
}
