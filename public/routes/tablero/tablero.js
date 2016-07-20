'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var path = './public/views/tablero';

    $stateProvider.state('home.tablero', {
      url: 'tablero',
      templateUrl: path + '/index.html',
      controller: 'MTableroController'
    });

    $stateProvider.state('home.tablero.versiculo', {
      url: '/versiculo',
      templateUrl: path + '/versiculo/index.html',
      controller: 'MVersiculoController'
    });

    $stateProvider.state('home.tablero.versiculo.es', {
      url: '/es',
      templateUrl: path + '/versiculo/es.html',
      controller: 'MVersiculoController'
    });
  }
]);
