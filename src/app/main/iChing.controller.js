(function(){
  'use strict';

  angular.module('iChing')
    .controller('iChingCtrl', iChingCtrl)
    .controller('HexagramCtrl', HexagramCtrl);

  function iChingCtrl($scope, $state, $timeout, $q, figures, ChangingHexagram) {
    var ic = this;
    ic.figures = figures;
    ic.changingHexagram = new ChangingHexagram();

    // 1 = Yang   (solid line)
    // 0 = Yin    (broken line)

    ic.tossCoins = function(){
      ic.changingHexagram.lines.length < 6 ? ic.changingHexagram.addLine() : null;
      var idx = ic.changingHexagram.lines.length === 3 ? 0 : 1;
      if(ic.changingHexagram.lines.length % 3 === 0){
        var seq = _.chunk(ic.changingHexagram.sequence, 3);
        var tri = _.find(figures.trigrams, function(t){ return _.isEqual(t.sequence, seq[idx]) });
        ic.changingHexagram.trigrams.push(tri);
      }
      if(ic.changingHexagram.lines.length === 6){
        ic.changingHexagram.isComplete = true;
        var hex = _.find(figures.hexagrams, function(h){
          return _.isEqual(h.sequence, ic.changingHexagram.sequence)
        });
        ic.changingHexagram.id = hex.number;
        ic.fetchResult(ic.changingHexagram);
      }
    };

    ic.fetchResult = function(hexagram){
      ic.figures.consult(hexagram).then(function(hexagram){
        var changingLines = [];
        _.each(hexagram.lines, function(l){ changingLines.push(l.changing ? 1 : 0) });
        $timeout(function(){
          $state.transitionTo('consult.result', {
            hexCl: changingLines.toString(),
            hexId: hexagram.id
          })
        }, 1000);
      });
    };

    ic.reset = function(){
      ic.changingHexagram = new ChangingHexagram();
      $state.transitionTo('home');
    }
  }

  function HexagramCtrl($stateParams, Hexagram){
    var hex = this;
    hex.hexagram = new Hexagram($stateParams.hexId, $stateParams.hexCl);
    hex.anyChangingLines = _.any(hex.hexagram.lines, 'changing');
  }
})();
