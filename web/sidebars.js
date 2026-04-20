// @ts-check

let currentDate = new Date();
let month = currentDate.getMonth() + 1;

let collapseBloc1 = !(month <= 9);
let collapseBloc2 = !(month >= 9 && month <= 11);
let collapseBloc3 = !(month >= 11);

const g1010 = [
  "2026-01-26",
  "2026-01-28",
  "2026-02-02",
  "2026-02-04",
  "2026-02-09",
  "2026-02-11",
  "2026-02-16",
  "2026-02-18",
  "2026-02-23",
  "2026-02-25",
  "2026-03-02",
  "2026-03-04",
  "2026-03-09",
  "2026-03-23",
  "2026-03-25",
  "2026-03-30",
  "2026-04-01",
  "2026-04-08",
  "2026-04-13",
  "2026-04-20",
  "2026-04-22",
  "2026-04-27",
  "2026-04-29",
  "2026-05-04",
  "2026-05-06",
  "2026-05-11",
  "2026-05-20",
  "2026-05-25",
  "2026-05-27",
  "2026-06-01"

];

const g1030 = [
  "2026-01-27",
  "2026-01-30",
  "2026-02-03",
  "2026-02-06",
  "2026-02-10",
  "2026-02-13",
  "2026-02-17",
  "2026-02-20",
  "2026-02-24",
  "2026-02-27",
  "2026-03-03",
  "2026-03-06",
  "2026-03-10",
  "2026-03-13",
  "2026-03-24",
  "2026-03-27",
  "2026-03-31",
  "2026-04-07",
  "2026-04-10",
  "2026-04-14",
  "2026-04-21",
  "2026-04-24",
  "2026-04-28",
  "2026-05-01",
  "2026-05-05",
  "2026-05-08",
  "2026-05-12",
  "2026-05-15",
  "2026-05-26",
  "2026-06-01"

];

const g1050 = [
  "2026-01-26",
  "2026-01-28",
  "2026-02-02",
  "2026-02-04",
  "2026-02-09",
  "2026-02-11",
  "2026-02-16",
  "2026-02-18",
  "2026-02-23",
  "2026-02-25",
  "2026-03-02",
  "2026-03-04",
  "2026-03-09",
  "2026-03-23",
  "2026-03-25",
  "2026-03-30",
  "2026-04-01",
  "2026-04-08",
  "2026-04-13",
  "2026-04-20",
  "2026-04-22",
  "2026-04-27",
  "2026-04-29",
  "2026-05-04",
  "2026-05-06",
  "2026-05-11",
  "2026-05-20",
  "2026-05-25",
  "2026-05-27",
  "2026-06-01"
];

const g1060 = [
  "2026-01-28",
  "2026-01-29",
  "2026-02-04",
  "2026-02-05",
  "2026-02-11",
  "2026-02-12",
  "2026-02-18",
  "2026-02-19",
  "2026-02-25",
  "2026-02-26",
  "2026-03-04",
  "2026-03-05",
  "2026-03-12",
  "2026-03-25",
  "2026-03-26",
  "2026-04-01",
  "2026-04-02",
  "2026-04-08",
  "2026-04-09",
  "2026-04-16",
  "2026-04-22",
  "2026-04-23",
  "2026-04-29",
  "2026-04-30",
  "2026-05-06",
  "2026-05-07",
  "2026-05-14",
  "2026-05-18",
  "2026-05-21",
  "2026-06-01"


];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "1.0 - Présentation du cours",
      id: "cours/introduction",
      customProps: {

        tooltip: "cache"
      },
    },
    {
      type: "doc",
      label: "1.1 - Révision, objets et collection",
      id: "cours/revision-collection",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[0] }, { "1020": g1010[0] }],
          "Philippe": [{ "1050": g1050[0] }],
          "David": [{ "1030": g1030[0] }, { "1040": g1030[0] }],
          "Jimmy": [{ "1060": g1060[0] }],
        },
        tooltip: "cache"
      },
    },
    {
      type: "doc",
      label: "1.2 - Git et TP1 (Partie 1)",
      id: "cours/git",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.1,
        calendrier: {
          "Jamil": [{ "1010": g1010[1] }, { "1020": g1010[1] }],
          "Philippe": [{ "1050": g1050[1] }],
          "David": [{ "1030": g1030[1] }, { "1040": g1030[1] }],
          "Jimmy": [{ "1060": g1060[1] }],
        },

        tooltip: "cache"
      },
    },
    {
      type: "doc",
      label: "2.1 - Définition des classes",
      id: "cours/classe",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[2] }, { "1020": g1010[2] }],
          "Philippe": [{ "1050": g1050[2] }],
          "David": [{ "1030": g1030[2] }, { "1040": g1030[2] }],
          "Jimmy": [{ "1060": g1060[2] }],
        },
        tooltip: "cache"
      },
    },
    {
      type: "doc",
      label: "2.2 - Encapsulation",
      id: "cours/encapsulation",
      customProps: {

        calendrier: {
          "Jamil": [{ "1010": g1010[3] }, { "1020": g1010[3] }],
          "Philippe": [{ "1050": g1050[3] }],
          "David": [{ "1030": g1030[3] }, { "1040": g1030[3] }],
          "Jimmy": [{ "1060": g1060[3] }],
        },
        tooltip: "cache"
      },
    },
    {
      type: "doc",
      label: "3.1 - Type par énumération - TP1 (Partie 2)",
      id: "cours/enum",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.4,
        calendrier: {
          "Jamil": [{ "1010": g1010[4] }, { "1020": g1010[4] }],
          "Philippe": [{ "1050": g1050[4] }],
          "David": [{ "1030": g1030[4] }, { "1040": g1030[4] }],
          "Jimmy": [{ "1060": g1060[4] }],
        },
        tooltip: "cache"
      },
    },
    {
      type: "doc",
      label: "3.2 - TP1 (Partie 2)",
      id: "cours/tp1-p2",
      customProps: {
        avancementLabel: "TP1",
        avancement: 0.6,
        calendrier: {
          "Jamil": [{ "1010": g1010[5] }, { "1020": g1010[5] }],
          "Philippe": [{ "1050": g1050[5] }],
          "David": [{ "1030": g1030[5] }, { "1040": g1030[5] }],
          "Jimmy": [{ "1060": g1060[5] }],
        },
        tooltip: "cache"
      },
    },
    {
      type: "doc",
      label: "4.1 - Type valeur vs référence",
      id: "cours/valeur-reference",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[6] }, { "1020": g1010[6] }],
          "Philippe": [{ "1050": g1050[6] }],
          "David": [{ "1030": g1030[6] }, { "1040": g1030[6] }],
          "Jimmy": [{ "1060": g1060[6] }],
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "4.2 - Intégration",
      id: "cours/integration-module1",
      className: "remise-tp1",
      customProps: {
        avancementLabel: "TP1",
        avancement: 1.0,
        calendrier: {
          "Jamil": [{ "1010": g1010[7] }, { "1020": g1010[7] }],
          "Philippe": [{ "1050": g1050[7] }],
          "David": [{ "1030": g1030[7] }, { "1040": g1030[7] }],
          "Jimmy": [{ "1060": g1060[7] }],
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "5.1 - Examen formatif 1",
      id: "cours/formatif1",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[8] }, { "1020": g1010[8] }],
          "Philippe": [{ "1050": g1050[8] }],
          "David": [{ "1030": g1030[8] }, { "1040": g1030[8] }],
          "Jimmy": [{ "1060": g1060[8] }],
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "5.2 - Examen 1",
      id: "cours/examen1",
      className: "examen",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[9] }, { "1020": g1010[9] }],
          "Philippe": [{ "1050": g1050[9] }],
          "David": [{ "1030": g1030[9] }, { "1040": g1030[9] }],
          "Jimmy": [{ "1060": g1060[9] }],
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "6.1 - Windows Forms",
      id: "cours/winforms",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[10] }, { "1020": g1010[10] }],
          "Philippe": [{ "1050": g1050[10] }],
          "David": [{ "1030": g1030[10] }, { "1040": g1030[10] }],
          "Jimmy": [{ "1060": g1060[10] }],
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "6.2 - Windows Forms (suite)",
      id: "cours/winforms_suite",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[11] }, { "1020": g1010[11] }],
          "Philippe": [{ "1050": g1050[11] }],
          "David": [{ "1030": g1030[11] }, { "1040": g1030[11] }],
          "Jimmy": [{ "1060": g1060[11] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "7.1 - Relation d'association",
      id: "cours/rencontre13",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[12] }, { "1020": g1010[12] }],
          "Philippe": [{ "1050": g1050[12] }],
          "David": [{ "1030": g1030[12] }, { "1040": g1030[12] }],
          "Jimmy": [{ "1060": g1060[12] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "7.2 - Exceptions",
      id: "cours/exceptions",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[13] }, { "1020": g1010[13] }],
          "Philippe": [{ "1050": g1050[13] }],
          "David": [{ "1030": g1030[13] }, { "1040": g1030[13] }],
          "Jimmy": [{ "1060": g1060[13] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "8.1 - TP2",
      id: "cours/tp2",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[14] }, { "1020": g1010[14] }],
          "Philippe": [{ "1050": g1050[14] }],
          "David": [{ "1030": "2026-03-27" }, { "1040": "2026-03-27" }],
          "Jimmy": [{ "1060": g1060[14] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "8.2 - DateTime, TimeSpan & ListView",
      id: "cours/rencontre16",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[15] }, { "1020": g1010[15] }],
          "Philippe": [{ "1050": g1050[15] }],
          "David": [{ "1030": g1030[15]  }, { "1040": g1030[15]  }],
          "Jimmy": [{ "1060": g1060[15] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "9.1 - CheckListBox & ListView LargeIcon",
      id: "cours/rencontre17",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[16] }, { "1020": g1010[16] }],
          "Philippe": [{ "1050": g1050[16] }],
          "David": [{ "1030": g1030[16]  }, { "1040": g1030[16]  }],
          "Jimmy": [{ "1060": g1060[16] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",

      label: "9.2 - TP2 (Suite)",
      id: "cours/tp2-suite",     
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.6,         
        calendrier: {
          "Jamil": [{ "1010": g1010[17] }, { "1020": g1010[17] }],
          "Philippe": [{ "1050": g1050[17] }],
          "David": [{ "1030": g1030[17]  }, { "1040": g1030[17]  }],
          "Jimmy": [{ "1060": g1060[17] }]
        },
        tooltip: "cache"
      }
    },  
    {
      type: "doc",

      label: "10.1 - Intégration",
      id: "cours/integration-module2",      
      customProps: {
        avancementLabel: "TP2",
        avancement: 0.8,
        calendrier: {
          "Jamil": [{ "1010": g1010[18] }, { "1020": g1010[18] }],
          "Philippe": [{ "1050": g1050[18] }],
          "David": [{ "1030": g1030[18]  }, { "1040": g1030[18]  }],
          "Jimmy": [{ "1060": g1060[18] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "10.2 - Examen formatif 2",
      id: "cours/formatif2",
      className: "remise-tp2",
      customProps: {
        avancementLabel: "TP2",
        avancement: 1.0,
        calendrier: {
          "Jamil": [{ "1010": g1010[19] }, { "1020": g1010[19] }],
          "Philippe": [{ "1050": g1050[19] }],
          "David": [{ "1030": g1030[19]  }, { "1040": g1030[19]  }],
          "Jimmy": [{ "1060": g1060[19] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "11.1 - Examen 2",
      id: "cours/examen2",
      className: "examen",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[20] }, { "1020": g1010[20] }],
          "Philippe": [{ "1050": g1050[20] }],
           "David": [{ "1030": g1030[20]  }, { "1040": g1030[20]  }],
          "Jimmy": [{ "1060": g1060[20] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "11.2 - rencontre 22",
      id: "cours/rencontre22",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[21] }, { "1020": g1010[21] }],
          "Philippe": [{ "1050": g1050[21] }],
          "David": [{ "1030": g1030[21]  }, { "1040": g1030[21]  }],
          "Jimmy": [{ "1060": g1060[21] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "12.1 - Polymorphisme",
      id: "cours/rencontre23",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[22] }, { "1020": g1010[22] }],
          "Philippe": [{ "1050": g1050[22] }],
          "David": [{ "1030": g1030[22]  }, { "1040": g1030[22]  }],
          "Jimmy": [{ "1060": g1060[22] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "12.2 - Polymorphisme (suite)",
      id: "cours/rencontre24",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[23] }, { "1020": g1010[23] }],
          "Philippe": [{ "1050": g1050[23] }],
          "David": [{ "1030": g1030[23]  }, { "1040": g1030[23]  }],
          "Jimmy": [{ "1060": g1060[23] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "13.1 - rencontre25",
      id: "cours/rencontre25",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[24] }, { "1020": g1010[24] }],
          "Philippe": [{ "1050": g1050[24] }],
          "David": [{ "1030": g1030[24]  }, { "1040": g1030[24]  }],
          "Jimmy": [{ "1060": g1060[24] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "13.2 - rencontre26",
      id: "cours/rencontre26",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[25] }, { "1020": g1010[25] }],
          "Philippe": [{ "1050": g1050[25] }],
          "David": [{ "1030": g1030[25]  }, { "1040": g1030[25]  }],
          "Jimmy": [{ "1060": g1060[25] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "14.1 - rencontre27",
      id: "cours/rencontre27",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[26] }, { "1020": g1010[26] }],
          "Philippe": [{ "1050": g1050[26] }],
          "David": [{ "1030": g1030[26]  }, { "1040": g1030[26]  }],
          "Jimmy": [{ "1060": g1060[26] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "14.2 - Intégration",
      id: "cours/integration-module3",
      className: "remise-tp3",
      customProps: {
        avancementLabel: "TP3",
        avancement: 1.0,
        calendrier: {
          "Jamil": [{ "1010": g1010[27] }, { "1020": g1010[27] }],
          "Philippe": [{ "1050": g1050[27] }],
          "David": [{ "1030": g1030[27]  }, { "1040": g1030[27]  }],
          "Jimmy": [{ "1060": g1060[27] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "15.1 - Examen formatif 3",
      id: "cours/formatif3",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[28] }, { "1020": g1010[28] }],
          "Philippe": [{ "1050": g1050[28] }],
          "David": [{ "1030": g1030[28]  }, { "1040": g1030[28]  }],
           "Jimmy": [{ "1060": g1060[28] }]
        },
        tooltip: "cache"
      }
    },
    {
      type: "doc",
      label: "15.2 - Examen 3",
      id: "cours/examen3",
      className: "examen",
      customProps: {
        calendrier: {
          "Jamil": [{ "1010": g1010[29] }, { "1020": g1010[29] }],
          "Philippe": [{ "1050": g1050[29] }],
          "David": [{ "1030": g1030[29]  }, { "1040": g1030[29]  }],
           "Jimmy": [{ "1060": g1060[29] }]
        },
        tooltip: "cache"
      }
    }

  ],
  tp: [
    { type: "autogenerated", dirName: "02-tp" }
  ],
  laboratoire: [
    {
      type: 'category',
      label: 'Laboratoire 1.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire1.1']
    },
    {
      type: 'category',
      label: 'Laboratoire 2.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire2.1']
    },
    {
      type: 'category',
      label: 'Laboratoire 2.2',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire2.2']
    },
    {
      type: 'category',
      label: 'Laboratoire 3.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire3.1']
    },
    {
      type: 'category',
      label: 'Laboratoire 4.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire4.1']
    },
    {
      type: 'category',
      label: 'Laboratoire 4.2',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire4.2A', 'laboratoire/laboratoire4.2B', 'laboratoire/laboratoire4.2C']

    },
    {
      type: 'category',
      label: 'Laboratoire 5.1',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire5.1A', 'laboratoire/laboratoire5.1B']

    },
    {
      type: 'category',
      label: 'Laboratoire 6.1',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire6.1A', 'laboratoire/laboratoire6.1B', 'laboratoire/laboratoire6.1C']

    },
    {
      type: 'category',
      label: 'Laboratoire 6.2',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire6.2A', 'laboratoire/laboratoire6.2B', 'laboratoire/laboratoire6.2C']

    },
    {
      type: 'category',
      label: 'Laboratoire 7.1',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire7.1A', 'laboratoire/laboratoire7.1B']

    },
    {
      type: 'category',
      label: 'Laboratoire 7.2',
      collapsible: true,
      collapsed: collapseBloc3,
      items: ['laboratoire/laboratoire7.2A', 'laboratoire/laboratoire7.2B', 'laboratoire/laboratoire7.2C']

    },
    {
      type: 'category',
      label: 'Laboratoire 8.2',
      collapsible: true,
      collapsed: collapseBloc3,
      items: ['laboratoire/laboratoire8.2A', 'laboratoire/laboratoire8.2B', 'laboratoire/laboratoire8.2C']

    },
    {
      type: 'category',
      label: 'Laboratoire 9.1',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire9.1A', 'laboratoire/laboratoire9.1B']

    },
    {
      type: 'category',
      label: 'Laboratoire 10.1',
      collapsible: true,
      collapsed: collapseBloc2,
      items: ['laboratoire/laboratoire10.1A', 'laboratoire/laboratoire10.1B']

    },
    {
      type: 'category',
      label: 'Laboratoire 10.2',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire10.2']

    },
    {
      type: 'category',
      label: 'Laboratoire 12.1',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire12.1A']
    }
    ,
    {
      type: 'category',
      label: 'Laboratoire 12.2',
      collapsible: true,
      collapsed: collapseBloc1,
      items: ['laboratoire/laboratoire12.2A']
    }


  ],
  solution: [{ type: "autogenerated", dirName: "04-solution" }],
  extra: [{ type: "autogenerated", dirName: "05-extra" }],
};


module.exports = sidebars;
