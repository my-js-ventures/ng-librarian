(function () {

  var angular = window.angular;

  var authors = {
    name: 'authors',
    parent: 'app',
    url: '/authors',
    abstract: true,
    template: '<authors />'
  };

  var authorsAll = {
    name: 'authors.list',
    url: '/list',
    template: '<authors-list />'
  };

  var authorDetails = {
    name: 'authors.details',
    url: '/:id/details',
    template: '<author-details />'
  };

  angular
    .module('authors')
    .config(function (
      $stateProvider,
      $urlRouterProvider
    ) {

      $stateProvider
        .state(authors)
        .state(authorsAll)
        .state(authorDetails);

      $urlRouterProvider.when('/authors', '/authors/all');

    });

}());
