// ES6

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/style.css';

console.log('jQuery version- ' + jQuery().jquery);

// global configs
console.log('api base url is- ', API_CONFIG.baseUrl);

import messages from './messages.js';
// Log message on console
console.log(messages.message);
// Write the text on page
document.write(messages.message);

import logo from '../img/webpack-logo-small.png';
document.querySelector('#logo').src = logo;
