(function(){
  'use strict';

  angular.module('iChing')
    .controller('IChingCtrl', IChingCtrl);
  function IChingCtrl($scope) {
    var ic = this;

    // 1 = Yang
    // 0 = Yin

    ic.trigrams = [
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

    ic.lookupTable = [
      [1,  34, 5,  26, 11, 9,  14, 43],
      [25, 51, 3,  27, 24, 42, 21, 17],
      [6,  40, 29, 4,  7,  59, 64, 47],
      [33, 62, 39, 52, 15, 53, 56, 31],
      [12, 16, 8,  23, 2,  20, 35, 45],
      [44, 32, 48, 18, 46, 57, 50, 28],
      [13, 55, 63, 22, 36, 37, 30, 49],
      [10, 54, 60, 41, 19, 61, 38, 58]
    ];

    // I Ching choosing each line
    ic.hexagram = [null, null, null, null, null, null];
    for(var i = 0; i < ic.hexagram.length; i++){
      ic.hexagram.splice(i, 1, Math.round(_.random(0, 1, true)));
    }
    // Get lower and upper trigrams
    // Lower trigram
    ic.lower = _.find(ic.trigrams, function(t){
      return _.isEqual(t.sequence, _.slice(ic.hexagram, 0, 3));
    });
    // Outer trigram
    ic.upper = _.find(ic.trigrams, function(t){
      return _.isEqual(t.sequence, _.slice(ic.hexagram, 3));
    });
    ic.hexNumber = ic.lookupTable[ic.lower.order][ic.upper.order];
  }
})();
