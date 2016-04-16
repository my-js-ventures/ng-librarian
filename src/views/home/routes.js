(function () {

  var angular = window.angular;

  var home = {
    name: 'home',
    parent: 'app',
    url: '/home',
    template: '<home />'
  };

  angular
    .module('home')
    .config(function (
      $stateProvider,
      $urlRouterProvider
    ) {

      $stateProvider
        .state(home);

      $urlRouterProvider.when('/', '/home');
      $urlRouterProvider.otherwise('/home');

    });

}());
