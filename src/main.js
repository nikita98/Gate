// ----- Main app file
import 'bootstrap';

var $ = require('jquery');
window.app = {};

// ----- Path to main SCSS file
var css = require('./scss/style.scss');

// ----- Require modules here
var gate = require('./js/gate.js');

// ----- Call modules here
$(document).ready(function() {
    gate();
});
