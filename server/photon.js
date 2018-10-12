import Particle from 'particle-api-js';
const particle = new Particle();

export default class Photon {
  constructor() {
    this.deviceId = process.env.DEVICE || 'reveal';
    this.name = process.env.NAME || 'gong';
    this.token = '';
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

  trigger() {
    console.log('TRIGGGEEERRRR');
    if (this.token) {
      particle
        .callFunction({
          deviceId: this.deviceId,
          name: this.name,
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
