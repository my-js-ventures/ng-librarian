const authors = {
  name: 'authors',
  parent: 'app',
  url: '/authors',
  abstract: true,
  template: '<authors />'
};

const authorsAll = {
  name: 'authors.list',
  url: '/list',
  template: '<authors-list />'
};

const authorDetails = {
  name: 'authors.details',
  url: '/:id/details',
  template: '<author-details />'
};

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(authors)
    .state(authorsAll)
    .state(authorDetails);

  $urlRouterProvider.when('/authors', '/authors/all');
}
