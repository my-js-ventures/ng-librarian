const attribute = {
  restrict: 'E',
  scope: {
    label: '@',
    value: '@'
  },
  templateUrl: './src/components/attribute/attribute.html'
};

export default window.angular
  .module('components.attribute', [])
  .directive('attribute', () => attribute)
  .name;
