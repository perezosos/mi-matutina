'use strict';

angular.module('seedApp')
.controller('MTableroController', ['$scope', '$log', 'DataLocal',
  function($scope, $log, DataLocal) {

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
      {dia: 'Domingo', dire: 'home.tablero.versiculo.dom', ref: '#/versiculo/domingo'},
      {dia: 'Lunes', dire: 'home.tablero.versiculo.lun', ref: '#/versiculo/lunes'},
      {dia: 'Martes', dire: 'home.tablero.versiculo.mar', ref: '#/versiculo/martes'},
      {dia: 'Miércoles', dire: 'home.tablero.versiculo.mie', ref: '#/versiculo/miercoles'},
      {dia: 'Jueves', dire: 'home.tablero.versiculo.jue', ref: '#/versiculo/jueves'},
      {dia: 'Viernes', dire: 'home.tablero.versiculo.vie', ref: '#/versiculo/viernes'},
      {dia: 'Sábado', dire: 'home.tablero.versiculo.sab', ref: '#/versiculo/sabado'}
    ];
    $scope.weekdaysES = weekdayES;

    var weekdayEN = [
      {dia: 'Sunday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/domingo'},
      {dia: 'Monday', dire: 'home.tablero.versiculo.lun', ref: '#/tablero/versiculo/lunes'},
      {dia: 'Tuesday', dire: 'home.tablero.versiculo.mar', ref: '#/tablero/versiculo/martes'},
      {dia: 'Wednesday', dire: 'home.tablero.versiculo.mie', ref: '#/tablero/versiculo/miercoles'},
      {dia: 'Tursday', dire: 'home.tablero.versiculo.jue', ref: '#/tablero/versiculo/jueves'},
      {dia: 'Friday', dire: 'home.tablero.versiculo.vie', ref: '#/tablero/versiculo/viernes'},
      {dia: 'Saturday', dire: 'home.tablero.versiculo.sab', ref: '#/tablero/versiculo/sabado'}
    ];
    $scope.weekdaysEN = weekdayEN;

    var weekdayPT = [
      {dia: 'Domingo', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/domingo'},
      {dia: 'Segunda-feira', dire: 'home.tablero.versiculo.lun', ref: '#/tablero/versiculo/lunes'},
      {dia: 'Terça-feira', dire: 'home.tablero.versiculo.mar', ref: '#/tablero/versiculo/martes'},
      {dia: 'Quarta-feira', dire: 'home.tablero.versiculo.mie', ref: '#/tablero/versiculo/miercoles'},
      {dia: 'Quinta-feira', dire: 'home.tablero.versiculo.jue', ref: '#/tablero/versiculo/jueves'},
      {dia: 'Sexta-feira', dire: 'home.tablero.versiculo.vie', ref: '#/tablero/versiculo/viernes'},
      {dia: 'Sábado', dire: 'home.tablero.versiculo.sab', ref: '#/tablero/versiculo/sabado'}
    ];
    $scope.weekdaysPT = weekdayPT;

    $scope.mytime = new Date();
  }
]);
