import LoaderCtrl from './loader-ctrl.js';
import LoaderSvc from './loader-svc.js';

const loader = {
  restrict: 'E',
  controller: LoaderCtrl,
  controllerAs: 'vm',
  templateUrl: './src/components/loader/loader.html'
};

export default window.angular
  .module('components.loader', [])
  .service('LoaderSvc', LoaderSvc)
  .directive('loader', () => loader)
  .name;

