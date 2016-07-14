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
      controller: 'TableroController',
      controller: 'WeekController'
    });

    $stateProvider.state('home.versiculo', {
      url: 'versiculo',
      templateUrl: path + '/versiculo/index.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.dom', {
      url: '/domingo',
      templateUrl: path + '/versiculo/dom.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.lun', {
      url: '/lunes',
      templateUrl: path + '/versiculo/lun.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.mar', {
      url: '/martes',
      templateUrl: path + '/versiculo/mar.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.mie', {
      url: '/miercoles',
      templateUrl: path + '/versiculo/mie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.jue', {
      url: '/jueves',
      templateUrl: path + '/versiculo/jue.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.vie', {
      url: '/viernes',
      templateUrl: path + '/versiculo/vie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.versiculo.sab', {
      url: '/sabado',
      templateUrl: path + '/versiculo/sab.html',
      controller: 'VersiculoController'
    });
  }
]);
