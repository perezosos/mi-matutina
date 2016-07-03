'use strict';

angular.module('seedApp')
.config(['$stateProvider',
  function($stateProvider) {

    var path = './public/views/persons';

    $stateProvider.state('home.persons', {
      url: 'persons',
      templateUrl: path + '/index.html',
      controller: 'PersonsController'
    });

    $stateProvider.state('home.persons.create', {
      url: '/create',
      templateUrl: path + '/create.html'
    });

    $stateProvider.state('home.persons.update', {
      url: '/update',
      templateUrl: path + '/update.html',
      controller: 'PersonsController'
    });
  }
]);
