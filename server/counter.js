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
    console.log(this.count);
    if (this.count === this.limit) {
      this.photon.trigger();
    }
  }

  status() {
    console.log(this.count, this.limit);
    let percent = this.count / this.limit;
    return parseInt(percent * 100, 10);
  }
}
