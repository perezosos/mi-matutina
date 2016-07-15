'use strict';

angular.module('seedApp')
.controller('ConfigController', ['$scope', '$state', function($scope, $state) {

  var weekd = {
    day: 'Domingo',
    ref: '#/versiculo/domingo'
  };
  $scope.weekd = weekd;

  $scope.crearDias = function() {
    console.log(weekd);
    var str = localStorage.getItem("weekd");
    str = str || '[]';
    var items = JSON.parse(str);
    items.push(weekd);
    localStorage.setItem("weekd", JSON.stringify(items));
    $state.go('home.config.list');
  };

  var str = localStorage.getItem("weekd");
  str = str || '[]';
  var items = JSON.parse(str);

  $scope.varweekd = items;

}]);
