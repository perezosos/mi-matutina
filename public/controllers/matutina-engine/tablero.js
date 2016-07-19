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
      {dia: 'Domingo', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/domingo'},
      {dia: 'Lunes', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/lunes'},
      {dia: 'Martes', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/martes'},
      {dia: 'Miércoles', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/miercoles'},
      {dia: 'Jueves', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/jueves'},
      {dia: 'Viernes', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/viernes'},
      {dia: 'Sábado', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/sabado'}
    ];
    $scope.weekdaysES = weekdayES;

    var weekdayEN = [
      {day: 'Sunday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/domingo'},
      {day: 'Monday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/lunes'},
      {day: 'Tuesday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/martes'},
      {day: 'Wednesday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/miercoles'},
      {day: 'Tursday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/jueves'},
      {day: 'Friday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/viernes'},
      {day: 'Saturday', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/sabado'}
    ];
    $scope.weekdaysEN = weekdayEN;

    var weekdayPT = [
      {day: 'Domingo', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/domingo'},
      {day: 'Segunda-feira', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/lunes'},
      {day: 'Terça-feira', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/martes'},
      {day: 'Quarta-feira', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/miercoles'},
      {day: 'Quinta-feira', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/jueves'},
      {day: 'Sexta-feira', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/viernes'},
      {day: 'Sábado', dire: 'home.tablero.versiculo.dom', ref: '#/tablero/versiculo/sabado'}
    ];
    $scope.weekdaysPT = weekdayPT;

    $scope.mytime = new Date();
  }
]);
