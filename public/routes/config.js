'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var path = './public/views/config';

    $stateProvider.state('home.config', {
      url: 'config',
      templateUrl: path + '/index.html',
      controller: 'MConfigController'
    });

    $stateProvider.state('home.config.create', {
      url: '/dias/create',
      templateUrl: path + '/create.html',
      controller: 'MConfigController'
    });

    $stateProvider.state('home.config.list', {
      url: '/dias/list',
      templateUrl: path + '/list.html',
      controller: 'MConfigController'
    });

    $stateProvider.state('home.config.dias', {
      url: '/dias',
      templateUrl: path + '/configdias.html',
      controller: 'MConfigController'
    });

    $stateProvider.state('home.config.semana', {
      url: '/semana',
      templateUrl: path + '/semana.html',
      controller: 'MConfigController'
    });
  }
]);
