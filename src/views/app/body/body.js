const appBody = {
  restrict: 'E',
  templateUrl: './src/views/app/body/body.html'
};

export default window.angular
  .module('app.body', [])
  .directive('appBody', () => appBody)
  .name;
