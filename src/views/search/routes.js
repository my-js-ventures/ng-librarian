(function () {

  var angular = window.angular;

  var search = {
    name: 'search',
    parent: 'app',
    url: '/search',
    template: '<search />'
  };

  angular
    .module('search')
    .config(function (
      $stateProvider
    ) {

      $stateProvider
        .state(search);

    });

}());
