import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './search.controller';
import template from './search.html';
import searchService from './search.service';

const Search = {
  restrict: 'E',
  scope: {},
  template,
  controllerAs: 'vm',
  controller,
  bindToController: true,
}

let searchModule = angular.module('search', [uiRouter])
.config(($stateProvider) => {
  $stateProvider
    .state('search', {
      url: '/',
      template: '<search></search>'
    })
})
.component('search', Search)
.service('searchService', searchService);

export default searchModule;


