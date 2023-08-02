{
    bsonType: 'object',
    required: [
      'brand',
      'model',
      'type',
      'motor',
      'picture',
      'places',
      'kilometer',
      'climatisation',
      'gps',
      'forfait',
      'isReserved'
    ],
    properties: {
      brand: {
        bsonType: 'string',
        description: 'Champ de type chaîne est requis'
      },
      model: {
        bsonType: 'string',
        description: 'Champ de type string est requis'
      },
      type: {
        bsonType: 'string',
        description: 'Champ de type string est requis'
      },
      motor: {
        bsonType: 'string',
        description: 'Champ de type string est requis'
      },
      picture: {
        bsonType: 'string',
        description: 'Champ de type string est requis'
      },
      places: {
        bsonType: 'number',
        description: 'Champ de type number est requis'
      },
      kilometer: {
        bsonType: 'number',
        description: 'Champ de type number est requis'
      },
      climatisation: {
        bsonType: 'bool',
        description: 'champ de type boolean est requis'
      },
      gps: {
        bsonType: 'bool',
        description: 'champ de type boolean est requis'
      },
      forfait: {
        bsonType: 'number',
        description: 'champ de type number est requis'
      },
      isReserved: {
        bsonType: 'bool',
        description: 'champ de type bool est requis'
      }
    }
  }