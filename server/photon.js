import Particle from 'particle-api-js';
const particle = new Particle();

export default class Photon {
  constructor() {
    this.deviceId = process.env.DEVICE || 'reveal';
    this.name = process.env.NAME || 'led';
    this.token = '';
    this.state = 'on';
    this.login();
  }

  async login() {
    const username = process.env.PUSER || '';
    const password = process.env.PASS || '';

    return particle
      .login({ username, password })
      .then(data => {
        this.token = data.body.access_token;
      })
      .catch(e => console.log('Could not log in.', e));
  }

  reset() {
    this.state = 'off';
  }

  trigger() {
    if (this.token) {
      particle
        .callFunction({
          deviceId: this.deviceId,
          name: this.name,
          argument: this.state,
          auth: this.token,
        })
        .then(data => {
          console.log('Function called succesfully:', data);
        })
        .catch(e => console.log('An error occurred.', e));
    } else {
      this.login().then(this.trigger.bind(this));
    }
  }
}
