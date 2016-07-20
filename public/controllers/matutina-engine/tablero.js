'use strict';

angular.module('seedApp')
.controller('MTableroController', ['$scope', '$state', '$log', 'DataLocal',
  function($scope, $state, $log, DataLocal) {

    // TODO lesson persistence data
    console.log(DataLocal);
    //DataLocal.hi = 'hola';
    //console.log(DataLocal.hi);
    $scope.lorem = 'lorem ipsum sit amed';
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

    $scope.addElement = function() {
      DataLocal.addElement({
        id: 52,
        isDefault: true,
        days: [
          {
            name: 'Domingo',
            versiculo: 'lorem ipsum sit ammed',
            versiculo_dato: 'salmos: 3:15'
          }
        ]
      });
    };

    var weekdayES = [
      {id: 1, dia: 'Domingo', dire: 'home.tablero.versiculo.dom', ref: '#/versiculo/domingo'},
      {id: 2, dia: 'Lunes', dire: 'home.tablero.versiculo.lun', ref: '#/versiculo/lunes'},
      {id: 3, dia: 'Martes', dire: 'home.tablero.versiculo.mar', ref: '#/versiculo/martes'},
      {id: 4, dia: 'Miércoles', dire: 'home.tablero.versiculo.mie', ref: '#/versiculo/miercoles'},
      {id: 5, dia: 'Jueves', dire: 'home.tablero.versiculo.jue', ref: '#/versiculo/jueves'},
      {id: 6, dia: 'Viernes', dire: 'home.tablero.versiculo.vie', ref: '#/versiculo/viernes'},
      {id: 7, dia: 'Sábado', dire: 'home.tablero.versiculo.sab', ref: '#/versiculo/sabado'}
    ];
    $scope.weekdaysES = weekdayES;

    var weekdayEN = [
      {id: 1, dia: 'Sunday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/domingo'},
      {id: 2, dia: 'Monday', dire: 'home.tablero.versiculo.lun', ref: '#/tablero/versiculo/lunes'},
      {id: 3, dia: 'Tuesday', dire: 'home.tablero.versiculo.mar', ref: '#/tablero/versiculo/martes'},
      {id: 4, dia: 'Wednesday', dire: 'home.tablero.versiculo.mie', ref: '#/tablero/versiculo/miercoles'},
      {id: 5, dia: 'Tursday', dire: 'home.tablero.versiculo.jue', ref: '#/tablero/versiculo/jueves'},
      {id: 6, dia: 'Friday', dire: 'home.tablero.versiculo.vie', ref: '#/tablero/versiculo/viernes'},
      {id: 7, dia: 'Saturday', dire: 'home.tablero.versiculo.sab', ref: '#/tablero/versiculo/sabado'}
    ];
    $scope.weekdaysEN = weekdayEN;

    var weekdayPT = [
      {id: 1, dia: 'Domingo', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/domingo'},
      {id: 2, dia: 'Segunda-feira', dire: 'home.tablero.versiculo.lun', ref: '#/tablero/versiculo/lunes'},
      {id: 3, dia: 'Terça-feira', dire: 'home.tablero.versiculo.mar', ref: '#/tablero/versiculo/martes'},
      {id: 4, dia: 'Quarta-feira', dire: 'home.tablero.versiculo.mie', ref: '#/tablero/versiculo/miercoles'},
      {id: 5, dia: 'Quinta-feira', dire: 'home.tablero.versiculo.jue', ref: '#/tablero/versiculo/jueves'},
      {id: 6, dia: 'Sexta-feira', dire: 'home.tablero.versiculo.vie', ref: '#/tablero/versiculo/viernes'},
      {id: 7, dia: 'Sábado', dire: 'home.tablero.versiculo.sab', ref: '#/tablero/versiculo/sabado'}
    ];
    $scope.weekdaysPT = weekdayPT;


    $scope.diaSem = {nroDia: -1, dia: 'Dia default'};
    $scope.getDiaByID = function(nro){
      if (nro == 0) {
        $scope.diaSem = {nroDia: 0, dia: 'Domingo'};
      }
      if (nro == 1) {
        $scope.diaSem = {nroDia: 1, dia: 'Lunes'};
      }
      if (nro == 2) {
        $scope.diaSem = {nroDia: 2, dia: 'Martes'};
      }
      if (nro == 3) {
        $scope.diaSem = {nroDia: 3, dia: 'Miercoles'};
      }
      if (nro == 4) {
        $scope.diaSem = {nroDia: 4, dia: 'Jueves'};
      }
      if (nro == 5) {
        $scope.diaSem = {nroDia: 5, dia: 'Viernes'};
      }
      if (nro == 6) {
        $scope.diaSem = {nroDia: 5, dia: 'Sabado'};
      }
      //$state.go('home.tablero.versiculo', {
      //  versiculo_dia: (nro + 1)
      //});
    };

    $scope.mytime = new Date();
  }
]);
