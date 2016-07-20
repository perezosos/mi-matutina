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
            title: '17 de Julio',
            versiculo: 'lorem ipsum sit ammed día 1',
            texto: 'Apocalipsis: 3:15'
          },
          {
            dia: 2,
            title: '18 de Julio',
            versiculo: 'lorem ipsum sit ammed día 2',
            texto: 'Apocalipsis: 3:15'
          },
          {
            dia: 3,
            title: '19 de Julio',
            versiculo: 'lorem ipsum sit ammed día 3',
            texto: 'Apocalipsis: 3:15'
          },
          {
            dia: 4,
            title: '20 de Julio',
            versiculo: 'lorem ipsum sit ammed día 4',
            texto: 'Apocalipsis: 3:15'
          },
          {
            dia: 5,
            title: '21 de Julio',
            versiculo: 'lorem ipsum sit ammed día 5',
            texto: 'Apocalipsis: 3:15'
          },
          {
            dia: 6,
            title: '22 de Julio',
            versiculo: 'lorem ipsum sit ammed día 6',
            texto: 'Apocalipsis: 3:15'
          },
          {
            dia: 7,
            title: '23 de Julio',
            versiculo: 'lorem ipsum sit ammed día 7',
            texto: 'Apocalipsis: 3:15'
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
            title: '17 de July',
            versiculo: 'lorem ipsum sit ammed day 1',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 2,
            title: '18 de July',
            versiculo: 'lorem ipsum sit ammed day 2',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 3,
            title: '19 de July',
            versiculo: 'lorem ipsum sit ammed day 3',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 4,
            title: '20 de July',
            versiculo: 'lorem ipsum sit ammed day 4',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 5,
            title: '21 de July',
            versiculo: 'lorem ipsum sit ammed day 5',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 6,
            title: '22 de July',
            versiculo: 'lorem ipsum sit ammed day 6',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 7,
            title: '23 de July',
            versiculo: 'lorem ipsum sit ammed day 7',
            texto: 'Revelations: 3:15'
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
            title: '17 do July',
            versiculo: 'lorem ipsum sit ammed dia 1',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 2,
            title: '18 do July',
            versiculo: 'lorem ipsum sit ammed dia 2',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 3,
            title: '19 do July',
            versiculo: 'lorem ipsum sit ammed dia 3',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 4,
            title: '20 do July',
            versiculo: 'lorem ipsum sit ammed dia 4',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 5,
            title: '21 do July',
            versiculo: 'lorem ipsum sit ammed dia 5',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 6,
            title: '22 do July',
            versiculo: 'lorem ipsum sit ammed dia 6',
            texto: 'Revelations: 3:15'
          },
          {
            dia: 7,
            title: '23 do July',
            versiculo: 'lorem ipsum sit ammed dia 7',
            texto: 'Revelations: 3:15'
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
