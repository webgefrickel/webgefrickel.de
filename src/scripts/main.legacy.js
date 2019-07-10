// the legacy version of the scripts:
// basically: do nothing but alerting the user, that s/he should upgrade
// and remove no-js class and add fonts-loaded class, for better css experience
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('fonts-loaded');

/* eslint-disable no-alert */
window.alert(
  'You are using an outdated browser. Consider upgrading your browser or switching to something more modern for the best experience.\nSie verwenden einen veralteten Browser. Ein Upgrade oder Wechsel zu einem moderneren Browser sollte mit Darstellungsproblemen helfen.'
);
