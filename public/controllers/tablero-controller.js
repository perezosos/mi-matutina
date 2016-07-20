'use strict'; //ha sido eliminado del index.php

angular.module('seedApp')
.controller('TableroController', ['$scope', '$log', 'DataLocal',
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
      {id: 1, day: 'Sunday', dire: 'home.tablero.versiculo.dom', ref: '#/versiculo/domingo'},
      {id: 2, day: 'Monday', dire: 'home.tablero.versiculo.lun', ref: '#/versiculo/lunes'},
      {id: 3, day: 'Tuesday', dire: 'home.tablero.versiculo.mar', ref: '#/versiculo/martes'},
      {id: 4, day: 'Wednesday', dire: 'home.tablero.versiculo.mie', ref: '#/versiculo/miercoles'},
      {id: 5, day: 'Tursday', dire: 'home.tablero.versiculo.jue', ref: '#/versiculo/jueves'},
      {id: 6, day: 'Friday', dire: 'home.tablero.versiculo.vie', ref: '#/versiculo/viernes'},
      {id: 7, day: 'Saturday', dire: 'home.tablero.versiculo.sab', ref: '#/versiculo/sabado'}
    ];
    $scope.weekdaysEN = weekdayEN;

    var weekdayPT = [
      {id: 1, dias: 'Domingo', dire: 'home.tablero.versiculo.dom', ref: '#/versiculo/domingo'},
      {id: 2, dias: 'Segunda-feira', dire: 'home.tablero.versiculo.lun', ref: '#/versiculo/lunes'},
      {id: 3, dias: 'Terça-feira', dire: 'home.tablero.versiculo.mar', ref: '#/versiculo/martes'},
      {id: 4, dias: 'Quarta-feira', dire: 'home.tablero.versiculo.mie', ref: '#/versiculo/miercoles'},
      {id: 5, dias: 'Quinta-feira', dire: 'home.tablero.versiculo.jue', ref: '#/versiculo/jueves'},
      {id: 6, dias: 'Sexta-feira', dire: 'home.tablero.versiculo.vie', ref: '#/versiculo/viernes'},
      {id: 7, dias: 'Sábado', dire: 'home.tablero.versiculo.sab', ref: '#/versiculo/sabado'}
    ];
    $scope.weekdaysPT = weekdayPT;


    $scope.generarNroRandom = function() {
      var numPosibilities = 3;
      var aleat = Math.random() * numPosibilities;
      aleat = Math.round(aleat);
      var capa = document.getElementById("capa");
      var h1 = document.createElement("div");
      h1.innerHTML = aleat;
      capa.appendChild(h1);
    };

    $scope.generarDias = function() {
      for (var i = 0; i < dias.length; i++) {
        var tablero = document.getElementById("tablero");
        var btnDias = document.createElement('a');

        btnDias.setAttribute("class", "btn btn-success");
        btnDias.setAttribute("ui-sref", dias[i].dire);
        btnDias.setAttribute("role", "button");
        btnDias.setAttribute("href", dias[i].ref);
        btnDias.innerHTML = dias[i].dia;

        tablero.appendChild(btnDias);
      }
    };
    $scope.generarNroRandomT = function() {
      var numPosibilities = 4;
      for (var i = 0; i < 7; i++) {
        var aleat = Math.random() * numPosibilities;
        aleat = Math.round(aleat);
        var capa = document.getElementById("tablero");
        var h1 = document.createElement("div");
        h1.innerHTML = 'Dia: ' + (i + 1) + ' | ';
        capa.appendChild(h1);
      }
    };

    $scope.genera_dias_semana = function() {
      var capa2 = document.getElementById("capa2");

      // Crea un elemento <table> y un elemento <tbody>
      for (var i = 0; i < dias.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "botoncito");

        var btnDias = document.createElement('a');

        btnDias.setAttribute("class", "btn btn-danger");
        btnDias.setAttribute("ui-sref", dias[i].dire);
        btnDias.setAttribute("role", "button");
        btnDias.setAttribute("href", dias[i].ref);
        btnDias.innerHTML = dias[i].dia;

        div.appendChild(btnDias);
        capa2.appendChild(div);
      }
      capa2.setAttribute("class", "text-center col-md-12");
    };

    //function genera_tabla() {
    $scope.genera_tabla = function() {
      // Obtener la referencia del elemento body
      //var body = document.getElementsByTagName("body")[0];
      var capa2 = document.getElementById("capa2");

      // Crea un elemento <table> y un elemento <tbody>
      var tabla   = document.createElement("table");
      var tblBody = document.createElement("tbody");

      // Crea las celdas
      for (var i = 0; i < 2; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
      }

      // posiciona el <tbody> debajo del elemento <table>
      tabla.appendChild(tblBody);
      // appends <table> into <body>
      capa2.appendChild(tabla);
      // modifica el atributo "border" de la tabla y lo fija a "2";
      tabla.setAttribute("border", "2");
    };




    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      $log.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };
  }
]);
/*
function aleatorio(texto) {
  var numPosibilidades = 5;
 	var aleat = Math.random() * numPosibilidades;
 	aleat = Math.round(aleat);

  var capa = document.getElementById("capa");

  var h1 = document.createElement("div");
  h1.innerHTML = aleat + texto;
  capa.appendChild(h1);
}
*/



      function toggleFullScreen(elem) {
      /*elem = document.getElementById("ui-view-b");*/
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
      (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
      (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
      (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
      }
      else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
      }
    };
