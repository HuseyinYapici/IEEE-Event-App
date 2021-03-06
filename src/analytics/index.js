
// import { GoogleAnalytics } from './google';
import { MixPanelAnalytics } from './mixpanel';

const list = [
  // new GoogleAnalytics(),
  new MixPanelAnalytics(),
];

/**
 * Start the analytics services
 * @export
 * @param {string} env
 */
export function start(env) {
  console.log('BaseAnalytics: start')
  
  for (const a of list) {
    a.start(env);
  }
}

/**
 * Set the current user info to analytics services
 * @export
 * @param {any} app  the application inside shared folder
 */
export function setUserInfo(app) {
  for (const a of list) {
    a.setUserInfo(app);
  }
}

/**
 * Send the custom event
 * @export
 * @param {string} name
 * @param {any} data
 */
export function event(name, data) {
  for (const a of list) {
    a.event(name, data);
  }
}

/**
 * set the current screen name
 * @export
 * @param {string} name
 */
export function screen(name) {
  for (const a of list) {
    a.screen(name);
  }
}
