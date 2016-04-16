(function () {

  var angular = window.angular;

  angular
    .module('app')
    .config(function (
      $httpProvider
    ) {

      $httpProvider.interceptors.push(function (
        $q,
        LoaderSvc
      ) {

        var count = 0;

        return {

          request: function (config) {
            count += 1;
            LoaderSvc.status.isLoading = true;

            return config;
          },

          response: function (response) {
            count -= 1;

            if (count <= 0) {
              LoaderSvc.status.isLoading = false;
            }

            return response;
          },

          responseError: function (response) {
            count -= 1;

            if (count <= 0) {
              LoaderSvc.status.isLoading = false;
            }

            return $q.reject(response);
          }

        };

      });

    });

}());
