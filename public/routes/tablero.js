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
  }
]);
