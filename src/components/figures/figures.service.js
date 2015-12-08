(function(){
  'use strict';

  angular
    .module('iChing')
    .service('figures', figures);

  // 1 = Yang   (solid line)
  // 0 = Yin    (broken line)

  function figures($q){
    var service = this;

    service.trigrams = [
      {
        name: 'Heaven',
        zhong: 'qian',
        wen: '\u4E7E',
        order: 0,
        sequence: [1, 1, 1]
      },
      {
        name: 'Thunder',
        zhong: 'zhen',
        wen: '\u9707',
        order: 1,
        sequence: [1, 0, 0]
      },
      {
        name: 'Water',
        zhong: 'kan',
        wen: '\u574E',
        order: 2,
        sequence: [0, 1, 0]
      },
      {
        name: 'Mountain',
        zhong: 'gen',
        wen: '\u826E',
        order: 3,
        sequence: [0, 0, 1]
      },
      {
        name: 'Earth',
        zhong: 'kun',
        wen: '\u5764',
        order: 4,
        sequence: [0, 0, 0]
      },
      {
        name: 'Wind',
        zhong: 'xun',
        wen: '\u5DFD',
        order: 5,
        sequence: [0, 1, 1]
      },
      {
        name: 'Flame',
        zhong: 'li',
        wen: '\u96E2',
        order: 6,
        sequence: [1, 0, 1]
      },
      {
        name: 'Lake',
        zhong: 'dui',
        wen: '\u514C',
        order: 7,
        sequence: [1, 1, 0]
      }
    ];

    service.hexagrams = [
      {
        number: 1,
        trigrams: [0, 0],
        sequence: [1,1,1,1,1,1],
        name: 'The Creative Heaven',
        wen: '乾'
      },
      {
        number: 2,
        trigrams: [4, 4],
        sequence: [0,0,0,0,0,0],
        name: 'The Receptive Earth',
        wen: '坤'
      },
      {
        number: 3,
        trigrams: [1, 2],
        sequence: [1,0,0,0,1,0],
        name: 'Difficulty at the Beginning',
        wen: '屯'
      },
      {
        number: 4,
        trigrams: [2, 3],
        sequence: [0,1,0,0,0,1],
        name: 'Youthful Folly',
        wen: '蒙'
      },
      {
        number: 5,
        trigrams: [0, 2],
        sequence: [1,1,1,0,1,0],
        name: 'Waiting',
        wen: '需'
      },
      {
        number: 6,
        trigrams: [2, 0],
        sequence: [0,1,0,1,1,1],
        name: 'Conflict',
        wen: '訟'
      },
      {
        number: 7,
        trigrams: [2, 4],
        sequence: [0,1,0,0,0,0],
        name: 'The Army',
        wen: '師'
      },
      {
        number: 8,
        trigrams: [4, 2],
        sequence: [0,0,0,0,1,0],
        name: 'Holding Together',
        wen: '比'
      },
      {
        number: 9,
        trigrams: [0, 5],
        sequence: [1,1,1,0,1,1],
        name: 'Small Taming',
        wen: '小畜'
      },
      {
        number: 10,
        trigrams: [7, 0],
        sequence: [1,1,0,1,1,1],
        name: 'Treading',
        wen: '履'
      },
      {
        number: 11,
        trigrams: [0, 4],
        sequence: [1,1,1,0,0,0],
        name: 'Peace',
        wen: '泰'
      },
      {
        number: 12,
        trigrams: [4, 0],
        sequence: [0,0,0,1,1,1],
        name: 'Standstill',
        wen: '否'
      },
      {
        number: 13,
        trigrams: [6, 0],
        sequence: [1,0,1,1,1,1],
        name: 'Fellowship',
        wen: '同人'
      },
      {
        number: 14,
        trigrams: [0, 6],
        sequence: [1,1,1,1,0,1],
        name: 'Great Possession',
        wen: '大有'
      },
      {
        number: 15,
        trigrams: [3, 4],
        sequence: [0,0,1,0,0,0],
        name: 'Modesty',
        wen: '謙'
      },
      {
        number: 16,
        trigrams: [4, 1],
        sequence: [0,0,0,1,0,0],
        name: 'Enthusiasm',
        wen: '豫'
      },
      {
        number: 17,
        trigrams: [1, 7],
        sequence: [1,0,0,1,1,0],
        name: 'Following',
        wen: '隨'
      },
      {
        number: 18,
        trigrams: [5, 3],
        sequence: [0,1,1,0,0,1],
        name: 'Work on the Decayed',
        wen: '蠱'
      },
      {
        number: 19,
        trigrams: [7, 4],
        sequence: [1,1,0,0,0,0],
        name: 'Approach',
        wen: '臨'
      },
      {
        number: 20,
        trigrams: [4, 5],
        sequence: [0,0,0,0,1,1],
        name: 'Contemplation',
        wen: '觀'
      },
      {
        number: 21,
        trigrams: [1, 6],
        sequence: [1,0,0,1,0,1],
        name: 'Biting Through',
        wen: '噬嗑'
      },
      {
        number: 22,
        trigrams: [6, 3],
        sequence: [1,0,1,0,0,1],
        name: 'Grace',
        wen: '賁'
      },
      {
        number: 23,
        trigrams: [4, 3],
        sequence: [0,0,0,0,0,1],
        name: 'Splitting Apart',
        wen: '剝'
      },
      {
        number: 24,
        trigrams: [1, 4],
        sequence: [1,0,0,0,0,0],
        name: 'Return',
        wen: '復'
      },
      {
        number: 25,
        trigrams: [1, 0],
        sequence: [1,0,0,1,1,1],
        name: 'Innocence',
        wen: '無妄'
      },
      {
        number: 26,
        trigrams: [0, 3],
        sequence: [1,1,1,0,0,1],
        name: 'Great Taming',
        wen: '大畜'
      },
      {
        number: 27,
        trigrams: [1, 3],
        sequence: [1,0,0,0,0,1],
        name: 'Corners of the Mouth',
        wen: '頤'
      },
      {
        number: 28,
        trigrams: [5, 7],
        sequence: [0,1,1,1,1,0],
        name: 'Great Preponderance',
        wen: '大過'
      },
      {
        number: 29,
        trigrams: [2, 2],
        sequence: [0,1,0,0,1,0],
        name: 'The Abyss',
        wen: '坎'
      },
      {
        number: 30,
        trigrams: [6, 6],
        sequence: [1,0,1,1,0,1],
        name: 'The Clinging Fire',
        wen: '離'
      },
      {
        number: 31,
        trigrams: [3, 7],
        sequence: [0,0,1,1,1,0],
        name: 'Influence',
        wen: '咸'
      },
      {
        number: 32,
        trigrams: [5, 1],
        sequence: [0,1,1,1,0,0],
        name: 'Duration',
        wen: '恆'
      },
      {
        number: 33,
        trigrams: [3, 0],
        sequence: [0,0,1,1,1,1],
        name: 'Retreat',
        wen: '遯'
      },
      {
        number: 34,
        trigrams: [0, 1],
        sequence: [1,1,1,1,0,0],
        name: 'Great Power',
        wen: '大壯'
      },
      {
        number: 35,
        trigrams: [4, 6],
        sequence: [0,0,0,1,0,1],
        name: 'Progress',
        wen: '晉'
      },
      {
        number: 36,
        trigrams: [6, 4],
        sequence: [1,0,1,0,0,0],
        name: 'Darkening of the Light',
        wen: '明夷'
      },
      {
        number: 37,
        trigrams: [6, 5],
        sequence: [1,0,1,0,1,1],
        name: 'The Family',
        wen: '家人'
      },
      {
        number: 38,
        trigrams: [7, 6],
        sequence: [1,1,0,1,0,1],
        name: 'Opposition',
        wen: '睽'
      },
      {
        number: 39,
        trigrams: [3, 2],
        sequence: [0,0,1,0,1,0],
        name: 'Obstruction',
        wen: '蹇'
      },
      {
        number: 40,
        trigrams: [2, 1],
        sequence: [0,1,0,1,0,0],
        name: 'Deliverance',
        wen: '解'
      },
      {
        number: 41,
        trigrams: [7, 3],
        sequence: [1,1,0,0,0,1],
        name: 'Decrease',
        wen: '損'
      },
      {
        number: 42,
        trigrams: [1, 5],
        sequence: [1,0,0,0,1,1],
        name: 'Increase',
        wen: '益'
      },
      {
        number: 43,
        trigrams: [0, 7],
        sequence: [1,1,1,1,1,0],
        name: 'Breakthrough',
        wen: '夬'
      },
      {
        number: 44,
        trigrams: [5, 0],
        sequence: [0,1,1,1,1,1],
        name: 'Coming to Meet',
        wen: '姤'
      },
      {
        number: 45,
        trigrams: [4, 7],
        sequence: [0,0,0,1,1,0],
        name: 'Gathering Together',
        wen: '萃'
      },
      {
        number: 46,
        trigrams: [5, 4],
        sequence: [0,1,1,0,0,0],
        name: 'Pushing Upward',
        wen: '升'
      },
      {
        number: 47,
        trigrams: [2, 7],
        sequence: [0,1,0,1,1,0],
        name: 'Oppression',
        wen: '困'
      },
      {
        number: 48,
        trigrams: [5, 2],
        sequence: [0,1,1,0,1,0],
        name: 'The Well',
        wen: '井'
      },
      {
        number: 49,
        trigrams: [6, 7],
        sequence: [1,0,1,1,1,0],
        name: 'Revolution',
        wen: '革'
      },
      {
        number: 50,
        trigrams: [5, 6],
        sequence: [0,1,1,1,0,1],
        name: 'The Cauldron',
        wen: '鼎'
      },
      {
        number: 51,
        trigrams: [1, 1],
        sequence: [1,0,0,1,0,0],
        name: 'Arousing Thunder',
        wen: '震'
      },
      {
        number: 52,
        trigrams: [3, 3],
        sequence: [0,0,1,0,0,1],
        name: 'Keeping Still Mountain',
        wen: '艮'
      },
      {
        number: 53,
        trigrams: [3, 5],
        sequence: [0,0,1,0,1,1],
        name: 'Development',
        wen: '漸'
      },
      {
        number: 54,
        trigrams: [7, 1],
        sequence: [1,1,0,1,0,0],
        name: 'Marrying Maiden',
        wen: '歸妹'
      },
      {
        number: 55,
        trigrams: [6, 1],
        sequence: [1,0,1,1,0,0],
        name: 'Abundance',
        wen: '豐'
      },
      {
        number: 56,
        trigrams: [3, 6],
        sequence: [0,0,1,1,0,1],
        name: 'The Wanderer',
        wen: '旅'
      },
      {
        number: 57,
        trigrams: [5, 5],
        sequence: [0,1,1,0,1,1],
        name: 'The Gentle Wind',
        wen: '巽'
      },
      {
        number: 58,
        trigrams: [7, 7],
        sequence: [1,1,0,1,1,0],
        name: 'The Joyous Lake',
        wen: '兌'
      },
      {
        number: 59,
        trigrams: [2, 5],
        sequence: [0,1,0,0,1,1],
        name: 'Dispersion',
        wen: '渙'
      },
      {
        number: 60,
        trigrams: [7, 2],
        sequence: [1,1,0,0,1,0],
        name: 'Limitation',
        wen: '節'
      },
      {
        number: 61,
        trigrams: [7, 5],
        sequence: [1,1,0,0,1,1],
        name: 'Inner Truth',
        wen: '中孚'
      },
      {
        number: 62,
        trigrams: [3, 1],
        sequence: [0,0,1,1,0,0],
        name: 'Small Preponderance',
        wen: '小過'
      },
      {
        number: 63,
        trigrams: [6, 2],
        sequence: [1,0,1,0,1,0],
        name: 'After Completion',
        wen: '既濟'
      },
      {
        number: 64,
        trigrams: [2, 6],
        sequence: [0,1,0,1,0,1],
        name: 'Before Completion',
        wen: '未濟'
      }
    ];

    service.lookupTable = [
      [1,  34, 5,  26, 11, 9,  14, 43],
      [25, 51, 3,  27, 24, 42, 21, 17],
      [6,  40, 29, 4,  7,  59, 64, 47],
      [33, 62, 39, 52, 15, 53, 56, 31],
      [12, 16, 8,  23, 2,  20, 35, 45],
      [44, 32, 48, 18, 46, 57, 50, 28],
      [13, 55, 63, 22, 36, 37, 30, 49],
      [10, 54, 60, 41, 19, 61, 38, 58]
    ];


    ////////
    // HEXAGRAM CLASS
    ////////

    function Hexagram(id){
      // PROPERTIES
      this.lower = id ? fetchTrigram(id, 'lower') : random(service.trigrams, 'sequence');
      this.upper = id ? fetchTrigram(id, 'upper') : random(service.trigrams, 'sequence');
      this.hexagram = id ? fetchById(id) : fetchByTrigrams([this.lower['order'], this.upper['order']]);
      //window.console.log('Hexagram:', this.hexagram);
      this.id = id ? _.parseInt(id) : this.hexagram.number;

      this.array = [];
      this.trigrams = [];

      // METHODS
      this.addLine = function(){
          var num = _.random(6, 9);
          var line = num % 2 === 0 ? {value: 0, changing: num === 6} : {value: 1, changing: num === 9};
          this.array.length < 6 ? this.array.push(line) : null;
          window.console.log('array:', this.array);
      };

      // INTERNAL METHODS
      function random(parent, value){
        var random = _.map(_.range(3), function(n){
          n = _.random(0, 1);
          return n;
        });
        return _.find(parent, function(p){
          return _.isEqual(p[value], random);
        })
      }
      function fetchTrigram(hexId, position){
        var hexagram = fetchById(hexId);
        return _.find(service.trigrams, function(t){
          var index = _.isEqual(position, 'lower') ? 0 : 1;
          return t.order === hexagram.trigrams[index];
        })
      }
      function fetchByTrigrams(array){
        return _.find(service.hexagrams, function(h){
          return _.isEqual(h.trigrams, array);
        })
      }
      function fetchById(id){
        return _.find(service.hexagrams, function(h){
          return h.number === _.parseInt(id)
        })
      }
    }

    ////////
    // Draw hexagram, line by line
    ////////

    service.hexagram = new Hexagram();
    //service.ask = function(){
    //  service.hexagram.array.length < 6 ? service.hexagram.addLine() : service.consult();
    //};

    ////////
    // Get a new hexagram
    ////////

    service.consult = function(){
      var deferred = $q.defer();
      var hexagram = new Hexagram();
      deferred.resolve(hexagram);
      return deferred.promise;
    };

    ////////
    // Retrieve a hexagram by ID
    ////////

    service.fetchHexagramById = function(hexId){
      return new Hexagram(hexId);
    };

    return service;
  }
})();
