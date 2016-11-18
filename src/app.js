angular.module('scribeApp',
              [ 'scribeApp.services',
                'scribeApp.apiController',
                'ngRoute'
              ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './app/templates/home.html',
      controller: 'ApiController'
    })
})
