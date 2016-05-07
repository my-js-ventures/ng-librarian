const radio = {
  restrict: 'E',
  scope: {
    ngModel: '=',
    label: '@',
    value: '@'
  },
  templateUrl: './src/components/radio/radio.html'
};

export default window.angular
  .module('components.radio', [])
  .directive('radio', () => radio)
  .name;
