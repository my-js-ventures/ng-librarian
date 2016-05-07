import config from './config.js';
import routes from './routes.js';
import body from './body/body.js';
import header from './header/header.js';

const app = {
  restrict: 'E',
  templateUrl: './src/views/app/app.html'
};

export default window.angular
  .module('app', [
    body,
    header
  ])
  .config(config)
  .config(routes)
  .directive('app', () => app)
  .name;
