'use strict';

angular.module('seedApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    var path = './public/matutina/verse';

    $stateProvider.state('verse', {
      url: '/verse/:day_id',
      templateUrl: path + '/index.html',
      controller: 'MatutinaVerseController'
    });
  }
]);
