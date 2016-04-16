(function () {

  var angular = window.angular,
    appName = 'ng-librarian';

  angular.module(appName, [
    'ui.router',
    'ngAnimate',
    'app',
    'components',
    'home',
    'books',
    'authors',
    'subjects',
    'search'
  ]);

  angular.element(document)
    .ready(function () {
      angular.bootstrap(document, [appName]);
    });

}());
