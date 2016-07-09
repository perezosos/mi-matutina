'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
//.config(['$stateProvider',
//  function($stateProvider)

    var path = './public/views';

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

    $stateProvider.state('home.versiculo.dom', {
      url: 'dom',
      templateUrl: path + '/versiculo/dom.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.lun', {
      url: 'lun',
      templateUrl: path + '/versiculo/lun.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.mar', {
      url: 'mar',
      templateUrl: path + '/versiculo/mar.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.mie', {
      url: 'mie',
      templateUrl: path + '/versiculo/mie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.jue', {
      url: 'jue',
      templateUrl: path + '/versiculo/jue.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.vie', {
      url: 'vie',
      templateUrl: path + '/versiculo/vie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.sab', {
      url: 'sab',
      templateUrl: path + '/versiculo/sab.html',
      controller: 'VersiculoController'
    });
  }
]);
