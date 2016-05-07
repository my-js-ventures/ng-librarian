import routes from './routes.js';

const home = {
  restrict: 'E',
  templateUrl: './src/views/home/home.html'
};

export default window.angular
  .module('home', [])
  .config(routes)
  .directive('home', () => home)
  .name;

