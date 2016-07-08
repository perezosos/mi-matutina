'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
//.config(['$stateProvider',
//  function($stateProvider)
    var path = './public/views';

    $stateProvider.state('home', {
      url: '/',
      templateUrl: path + '/index.html',
      controller: 'MainController'
    });

    $stateProvider.state('home.tablero', {
      url: 'tablero',
      templateUrl: path + '/tablero/index.html',
      controller: 'TableroController'
    });

    $stateProvider.state('home.versiculo', {
      url: 'versiculo',
      templateUrl: path + '/versiculo/index.html',
      controller: 'VersiculoController'
    });

    $urlRouterProvider.otherwise("/tablero");
  }
]);
