'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
//.config(['$stateProvider',
//  function($stateProvider) 

    var path = './public/views/contact';

    $stateProvider.state('home.contact', {
      url: 'contact',
      templateUrl: path + '/contact.html',
      controller: 'ContactController'
    });
    $stateProvider.state('home.about', {
      url: 'about',
      templateUrl: path + '/about.html',
      controller: 'ContactController'
    });
  }
]);
