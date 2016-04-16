(function () {

  var angular = window.angular;

  var subjects = {
    name: 'subjects',
    parent: 'app',
    url: '/subjects',
    abstract: true,
    template: '<subjects />'
  };

  var subjectsAll = {
    name: 'subjects.list',
    url: '/list',
    template: '<subjects-list />'
  };

  var subjectDetails = {
    name: 'subjects.details',
    url: '/:id/details',
    template: '<subject-details />'
  };

  angular
    .module('subjects')
    .config(function (
      $stateProvider,
      $urlRouterProvider
    ) {

      $stateProvider
        .state(subjects)
        .state(subjectsAll)
        .state(subjectDetails);

      $urlRouterProvider.when('/subjects', '/subjects/all');

    });

}());
