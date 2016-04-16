(function () {

  var angular = window.angular;

  var app = {
    name: 'app',
    abstract: true,
    template: '<app />'
  };

  angular
    .module('app')
    .config(function (
      $stateProvider
    ) {

      $stateProvider
        .state(app);

    });

}());
