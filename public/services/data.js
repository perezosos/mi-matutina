'use strict';

angular.module('seedApp').factory('DataLocal', [
   //localStorage.getItem("dias");
  function() {
    var data = [
      {
        id: 51,
        nickUserP: 'Perezoso Master',
        periodo: '17-23/07/2016',
        matutinaCategoria: 'Joven',
        matutinaTitle: '#Visita mi Muro',
        isDefault: true,
        language: 'ES',
        days: [
          {
            dia: 1,
            versiculo: 'lorem ipsum sit ammed día 1',
            versiculo_dato: 'Apocalipsis: 3:15'
          },
          {
            dia: 2,
            versiculo: 'lorem ipsum sit ammed día 2',
            versiculo_dato: 'Apocalipsis: 3:15'
          },
          {
            dia: 3,
            versiculo: 'lorem ipsum sit ammed día 3',
            versiculo_dato: 'Apocalipsis: 3:15'
          },
          {
            dia: 4,
            versiculo: 'lorem ipsum sit ammed día 4',
            versiculo_dato: 'Apocalipsis: 3:15'
          },
          {
            dia: 5,
            versiculo: 'lorem ipsum sit ammed día 5',
            versiculo_dato: 'Apocalipsis: 3:15'
          },
          {
            dia: 6,
            versiculo: 'lorem ipsum sit ammed día 6',
            versiculo_dato: 'Apocalipsis: 3:15'
          },
          {
            dia: 7,
            versiculo: 'lorem ipsum sit ammed día 7',
            versiculo_dato: 'Apocalipsis: 3:15'
          }
        ]
      },
      {
        id: 52,
        nickUserP: 'Perezoso Master',
        periodo: '17-23/07/2016',
        matutinaCategoria: 'Joven',
        matutinaTitle: '#Visita mi Muro',
        isDefault: false,
        language: 'EN',
        days: [
          {
            dia: 1,
            versiculo: 'lorem ipsum sit ammed day 1',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 2,
            versiculo: 'lorem ipsum sit ammed day 2',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 3,
            versiculo: 'lorem ipsum sit ammed day 3',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 4,
            versiculo: 'lorem ipsum sit ammed day 4',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 5,
            versiculo: 'lorem ipsum sit ammed day 5',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 6,
            versiculo: 'lorem ipsum sit ammed day 6',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 7,
            versiculo: 'lorem ipsum sit ammed day 7',
            versiculo_dato: 'Revelations: 3:15'
          }
        ]
      },
      {
        id: 53,
        nickUserP: 'Perezoso Master',
        periodo: '17-23/07/2016',
        matutinaCategoria: 'Adultos',
        matutinaTitle: 'Sin Titulo',
        isDefault: false,
        language: 'PT',
        days: [
          {
            dia: 1,
            versiculo: 'lorem ipsum sit ammed dia 1',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 2,
            versiculo: 'lorem ipsum sit ammed dia 2',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 3,
            versiculo: 'lorem ipsum sit ammed dia 3',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 4,
            versiculo: 'lorem ipsum sit ammed dia 4',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 5,
            versiculo: 'lorem ipsum sit ammed dia 5',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 6,
            versiculo: 'lorem ipsum sit ammed dia 6',
            versiculo_dato: 'Revelations: 3:15'
          },
          {
            dia: 7,
            versiculo: 'lorem ipsum sit ammed dia 7',
            versiculo_dato: 'Revelations: 3:15'
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
