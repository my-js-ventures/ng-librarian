import SearchCtrl from './search-ctrl.js';
import SearchSvc from './search-svc.js';
import routes from './routes.js';
import searchItem from './search-item/search-item.js';

const search = {
  restrict: 'E',
  controller: SearchCtrl,
  controllerAs: 'vm',
  templateUrl: './src/views/search/search.html'
};

export default window.angular
  .module('search', [
    searchItem
  ])
  .config(routes)
  .service('SearchSvc', SearchSvc)
  .directive('search', () => search)
  .name;
