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

    $urlRouterProvider.otherwise("/");
  }
]);
