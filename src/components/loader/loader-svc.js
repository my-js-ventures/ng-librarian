(function () {

  var angular = window.angular;

  function LoaderSvc() {

    this.status = {
      isLoading: false
    };

  }

  angular
    .module('components')
    .service('LoaderSvc', LoaderSvc);

}());
