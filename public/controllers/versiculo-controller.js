'use strict'; //ha sido eliminado del index.php

angular.module('seedApp')
.controller('VersiculoController', ['$scope','$log', 'DataLocal',
  function($scope, $log, DataLocal) {
    //
    console.log(DataLocal);
    $scope.datum = DataLocal.getItems;

  }
]);
