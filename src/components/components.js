import attribute from './attribute/attribute.js';
import loader from './loader/loader.js';
import radio from './radio/radio.js';

export default window.angular
  .module('components', [
    attribute,
    loader,
    radio
  ])
  .name;
