'use strict';

angular.module('seedApp').factory('DataLocal', [
   //localStorage.getItem("dias");
  function() {
    var data = [
      {
        id: 51,
        isDefault: false,
        days: [
          {
            name: 'Domingo',
            versiculo: 'lorem ipsum sit ammed',
            versiculo_dato: 'salmos: 3:15'
          },
          {
            name: 'Lunes',
            versiculo: 'lorem ipsum sit ammed',
            versiculo_dato: 'salmos: 3:15'
          }
        ]
      },
      {
        id: 52,
        isDefault: true,
        days: [
          {
            name: 'Domingo',
            versiculo: 'lorem ipsum sit ammed',
            versiculo_dato: 'salmos: 3:15'
          }
        ]
      }
    ];

    var default_data = null;

    var local_data = null;
    try {
      local_data = JSON.parse(localStorage.getItem("store_weeks"));
    } catch (e) {
      console.error(e);
    }

    if (local_data) {
      default_data = local_data;
    } else {
      default_data = data;
    }

    var save = function() {
      console.log("save");
      localStorage.setItem("store_weeks", JSON.stringify(default_data));
    }
    var addElement = function(item) {
      data.push(item);
      save();
    }
    return {
      getItems: default_data,
      save: save,
      addElement: addElement
    };
  }
]);
