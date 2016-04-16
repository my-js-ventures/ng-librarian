(function () {

  var angular = window.angular,
    appName = 'ng-librarian';

  angular.module(appName, [
    'ui.router',
    'app',
    'components',
    'home',
    'books',
    'authors',
    'subjects'
  ]);

  angular.element(document)
    .ready(function () {
      angular.bootstrap(document, [appName]);
    });

}());
