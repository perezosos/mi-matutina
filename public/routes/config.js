'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var path = './public/views/config';

    $stateProvider.state('home.config', {
      url: 'config',
      templateUrl: path + '/index.html',
      controller: 'ConfigController'
    });

    $stateProvider.state('home.config.create', {
      url: '/create',
      templateUrl: path + '/create.html',
      controller: 'ConfigController'
    });

    $stateProvider.state('home.config.list', {
      url: '/list',
      templateUrl: path + '/list.html',
      controller: 'ConfigController'
    });

    $urlRouterProvider.otherwise('/');
  }
]);
