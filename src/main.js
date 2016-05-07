import 'angular';
import 'angular/animate';
import 'angular/ui-router';
import 'jquery';

import app from './views/app/app.js';
import authors from './views/authors/authors.js';
import books from './views/books/books.js';
import components from './components/components.js';
import home from './views/home/home.js';
import search from './views/search/search.js';
import subjects from './views/subjects/subjects.js';

const angular = window.angular;
const appName = 'ng-librarian';
const module = angular.module(appName, [
  'ui.router',
  'ngAnimate',
  app,
  authors,
  books,
  components,
  home,
  search,
  subjects
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, [appName]));

export default module.name;
