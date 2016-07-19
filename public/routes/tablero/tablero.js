'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var path = './public/views/tablero';

    $stateProvider.state('home.tablero', {
      url: 'tablero',
      templateUrl: path + '/index.html',
      controller: 'MTableroController',
      /*controller: 'WeekController',*/
      /*controller: 'ConfigController'*/
    });

  }
]);
