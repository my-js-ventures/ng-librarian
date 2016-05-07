import banner from './banner/banner.js';
import userInfo from './user-info/user-info.js';

const appHeader = {
  restrict: 'E',
  templateUrl: './src/views/app/header/header.html'
};

export default window.angular
  .module('app.header', [
    banner,
    userInfo
  ])
  .directive('appHeader', () => appHeader)
  .name;
