const home = {
  name: 'home',
  parent: 'app',
  url: '/home',
  template: '<home />'
};

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(home);

  $urlRouterProvider.when('/', '/home');
  $urlRouterProvider.otherwise('/home');
}
