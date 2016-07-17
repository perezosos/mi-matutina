'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var path1 = './public/views/tablero';
    var path2 = './public/views';

    $stateProvider.state('home.tablero', {
      url: 'tablero',
      templateUrl: path1 + '/index.html',
      controller: 'TableroController',
      /*controller: 'WeekController',*/
      /*controller: 'ConfigController'*/
    });

    $stateProvider.state('home.versiculo', {
      url: 'versiculo',
      templateUrl: path2 + '/versiculo/index.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.dom', {
      url: '/domingo',
      templateUrl: path2 + '/versiculo/dom.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.lun', {
      url: '/lunes',
      templateUrl: path2 + '/versiculo/lun.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.mar', {
      url: '/martes',
      templateUrl: path2 + '/versiculo/mar.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.mie', {
      url: '/miercoles',
      templateUrl: path2 + '/versiculo/mie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.jue', {
      url: '/jueves',
      templateUrl: path2 + '/versiculo/jue.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.vie', {
      url: '/viernes',
      templateUrl: path2 + '/versiculo/vie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.sab', {
      url: '/sabado',
      templateUrl: path2 + '/versiculo/sab.html',
      controller: 'VersiculoController'
    });
  }
]);
