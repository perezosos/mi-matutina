'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var path1 = './public/views/tablero';
    var path2 = './public/views';

    $stateProvider.state('home.tablero', {
      url: 'tablero',
      templateUrl: path1 + '/index.html',
      controller: 'TableroController'
      /*controller: 'WeekController',*/
      /*controller: 'ConfigController'*/
    });

    $stateProvider.state('home.versiculo', {
      url: 'versiculo',
      templateUrl: path2 + '/versiculo/index.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.dom', {
      url: '/versiculo/domingo',
      templateUrl: path2 + '/dom.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.lun', {
      url: '/versiculo/lunes',
      templateUrl: path2 + '/lun.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.mar', {
      url: '/versiculo/martes',
      templateUrl: path2 + '/mar.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.mie', {
      url: '/versiculo/miercoles',
      templateUrl: path2 + '/mie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.jue', {
      url: '/versiculo/jueves',
      templateUrl: path2 + '/jue.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.vie', {
      url: '/versiculo/viernes',
      templateUrl: path2 + '/vie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.sab', {
      url: '/versiculo/sabado',
      templateUrl: path2 + '/sab.html',
      controller: 'VersiculoController'
    });

  }
]);
