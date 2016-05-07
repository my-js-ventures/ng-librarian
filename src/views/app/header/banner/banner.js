const headerBanner = {
  restrict: 'E',
  templateUrl: './src/views/app/header/banner/banner.html'
};

export default window.angular
  .module('app.header.banner', [])
  .directive('headerBanner', () => headerBanner)
  .name;
