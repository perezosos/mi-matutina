'use strict';

angular.module('seedApp')
.controller('MVersiculoController', ['$scope', '$state','$log', 'DataLocal',
  function($scope, $state, $log, DataLocal) {
    //
    console.log(DataLocal);
    $scope.datum = DataLocal.getItems;

    //console.log($state.params.versiculo_dia);
  }
]);
