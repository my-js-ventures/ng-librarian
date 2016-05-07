const subjects = {
  name: 'subjects',
  parent: 'app',
  url: '/subjects',
  abstract: true,
  template: '<subjects />'
};

const subjectsAll = {
  name: 'subjects.list',
  url: '/list',
  template: '<subjects-list />'
};

const subjectDetails = {
  name: 'subjects.details',
  url: '/:id/details',
  template: '<subject-details />'
};

export default function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(subjects)
    .state(subjectsAll)
    .state(subjectDetails);

  $urlRouterProvider.when('/subjects', '/subjects/all');
}
