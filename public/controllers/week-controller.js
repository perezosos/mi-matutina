'use strict';

angular.module('seedApp')
.controller('WeekController', ['$scope', '$state', function($scope, $state) {

  var dia = {
    day: '',
    ref: '#'
  };
  $scope.dia = dia;

  $scope.crearDias = function() {
    console.log(dia);
    var str = localStorage.getItem("dias");
    str = str || '[]';
    var items = JSON.parse(str);
    items.push(dia);
    localStorage.setItem("dias", JSON.stringify(items));
    $state.go('/tablero');
  };

  var str = localStorage.getItem("dias");
  str = str || '[]';
  var items = JSON.parse(str);

  $scope.vardias = items;

}]);
