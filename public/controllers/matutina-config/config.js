
'use strict';

angular.module('seedApp')
.controller('MConfigController', ['$scope', '$state', '$log', 'DataLocal', function($scope, $state, $log, DataLocal) {

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


  console.log(DataLocal);
  $scope.datum = DataLocal.getItems;

  $scope.onSelect = function(data) {
    //DataLocal.getItems.forEach(function(item)
    $scope.datum.forEach(function(item) {
      if (item.id == data.id) {
        item.isDefault = true;
      } else {
        item.isDefault = false;
      }
    });
    DataLocal.save();
  };

}]);
