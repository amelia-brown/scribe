angular.module('scribeApp.apiController', [])
import throttle from 'lodash.throttle'

.controller('ApiController', function($scope, API) {
  $scope.data = {};
  $scope.search = throttle(function() {
    return API.queryYoutube($scope.data.searchString)
      .then(function(results) {
        $scope.data.results = results;
      })
      .catch(function(err) {
        console.log(err);
      })
  }, 2000);
})
