const app = {
  name: 'app',
  abstract: true,
  template: '<app />'
};

export default function routes($stateProvider) {

  $stateProvider
    .state(app);
}
