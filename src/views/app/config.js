export default function config($httpProvider) {

  $httpProvider.interceptors.push(function ($q, LoaderSvc) {

    var count = 0;

    function requestHandler(options) {

      count += 1;
      LoaderSvc.status.isLoading = true;

      return options;
    }

    function responseHandler(response) {

      count -= 1;

      if (count <= 0) {
        LoaderSvc.status.isLoading = false;
      }

      return response;
    }

    function responseErrorHandler(response) {

      count -= 1;

      if (count <= 0) {
        LoaderSvc.status.isLoading = false;
      }

      return $q.reject(response);
    }

    return {
      request: requestHandler,
      response: responseHandler,
      responseError: responseErrorHandler
    };
  });
}
