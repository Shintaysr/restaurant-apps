import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import filter from 'lodash.filter';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import component
import './component/app-bar';
import './component/app-hero';
import './component/app-footer';

const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
filter(contacts, contactType.value === 'all' ? {} : { type: contactType.value })
  .forEach(renderContact);
