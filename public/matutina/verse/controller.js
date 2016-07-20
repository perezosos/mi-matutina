'use strict';

angular.module('seedApp')
.controller('MatutinaVerseController', [
  '$scope',
  '$state',
  '$log',
  'DataLocal',
  function($scope, $state, $log, DataLocal) {
    console.log(DataLocal);
    $scope.datum = DataLocal.getItems;
    // select week
    var day_id = $state.params.day_id;
    // TODO Implement a way to get select week
    var week = DataLocal.getItems[0];
    console.log(day_id);
    console.log(week);

    $scope.day_id = day_id;
    $scope.data2 = week;
    $scope.day = null;

    $scope.goBack = function() {
      $state.go('home.tablero');
    }

    $scope.getDay = function() {
      week.days.forEach(function(item) {
        // TODO change it by ID
        if (item.dia == day_id) {
          $scope.day = item;
        }
      });
    }

    // retrieve current day
    $scope.getDay();
}]);
