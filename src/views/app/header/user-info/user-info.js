const headerUserInfo = {
  restrict: 'E',
  templateUrl: './src/views/app/header/user-info/user-info.html'
};

export default window.angular
  .module('app.header.user-info', [])
  .directive('headerUserInfo', () => headerUserInfo)
  .name;
