import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './app/index';
import template from './app.html';

let AppComponent = () => ({
  template,
  restrict: 'E'
});

angular.module('scribeApp', [
  uiRouter,
  Components.name,
])
.directive('app', AppComponent);
