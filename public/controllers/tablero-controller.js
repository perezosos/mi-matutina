'use strict';

angular.module('seedApp')
.controller('TableroController', ['$scope',
  function($scope) {

    $scope.generarNroRandom = function() {
      var numPosibilities = 3;
      var aleat = Math.random() * numPosibilities;
      aleat = Math.round(aleat);
      var capa = document.getElementById("capa");
      var h1 = document.createElement("div");
      h1.innerHTML = aleat;
      capa.appendChild(h1);
    };

    var day = {dia:'Lunes'};

    var dias = [
      {dia: 'Domingo', dire: 'home.versiculo.dom', ref: '#/versiculo/domingo'},
      {dia: 'Lunes', dire: 'home.versiculo.dom', ref: '#/versiculo/lunes'},
      {dia: 'Martes', dire: 'home.versiculo.dom', ref: '#/versiculo/martes'},
      {dia: 'Miercoles', dire: 'home.versiculo.dom', ref: '#/versiculo/miercoles'},
      {dia: 'Jueves', dire: 'home.versiculo.dom', ref: '#/versiculo/jueves'},
      {dia: 'Viernes', dire: 'home.versiculo.dom', ref: '#/versiculo/viernes'},
      {dia: 'Sabado', dire: 'home.versiculo.dom', ref: '#/versiculo/sabado'}
    ];

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
  }
]);

function aleatorio(texto) {
  var numPosibilidades = 5;
 	var aleat = Math.random() * numPosibilidades;
 	aleat = Math.round(aleat);

  var capa = document.getElementById("capa");

  var h1 = document.createElement("div");
  h1.innerHTML = aleat + texto;
  capa.appendChild(h1);
}
