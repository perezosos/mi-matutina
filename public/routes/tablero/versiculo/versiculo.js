'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var path = './public/views/tablero/versiculo';

    $stateProvider.state('home.tablero.versiculo', {
      url: '/versiculo',
      templateUrl: path + '/index.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.tablero.versiculo.dom', {
      url: '/domingo',
      templateUrl: path + '/dom.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.tablero.versiculo.lun', {
      url: '/lunes',
      templateUrl: path + '/lun.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.tablero.versiculo.mar', {
      url: '/martes',
      templateUrl: path + '/mar.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.tablero.versiculo.mie', {
      url: '/miercoles',
      templateUrl: path + '/mie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.tablero.versiculo.jue', {
      url: '/jueves',
      templateUrl: path + '/jue.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.tablero.versiculo.vie', {
      url: '/viernes',
      templateUrl: path + '/vie.html',
      controller: 'VersiculoController'
    });

    $stateProvider.state('home.tablero.versiculo.sab', {
      url: '/sabado',
      templateUrl: path + '/sab.html',
      controller: 'VersiculoController'
    });
  }
]);
