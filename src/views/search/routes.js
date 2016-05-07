const search = {
  name: 'search',
  parent: 'app',
  url: '/search',
  template: '<search />'
};

export default function ($stateProvider) {

  $stateProvider
    .state(search);
}
