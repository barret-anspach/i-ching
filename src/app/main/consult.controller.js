(function(){
  'use strict';

  angular.module('iChing')
    .controller('ConsultCtrl', ConsultCtrl);

  function ConsultCtrl($scope, $state, $timeout, $q, figures, ChangingHexagram) {
    var consult = this;
    consult.figures = figures;
    consult.changingHexagram = new ChangingHexagram();

    // 1 = Yang   (solid line)
    // 0 = Yin    (broken line)

    consult.divideYarrow = function(){
      consult.changingHexagram.lines.length < 6 ? consult.changingHexagram.addYarrowLine() : null;
      var idx = consult.changingHexagram.lines.length === 3 ? 0 : 1;
      if(consult.changingHexagram.lines.length % 3 === 0){
        var seq = _.chunk(consult.changingHexagram.sequence, 3);
        var tri = _.find(figures.trigrams, function(t){ return _.isEqual(t.sequence, seq[idx]) });
        consult.changingHexagram.trigrams.push(tri);
      }
      if(consult.changingHexagram.lines.length === 6){
        consult.changingHexagram.isComplete = true;
        var hex = _.find(figures.hexagrams, function(h){
          return _.isEqual(h.sequence, consult.changingHexagram.sequence)
        });
        consult.changingHexagram.id = hex.number;
        consult.fetchResult(consult.changingHexagram);
      }
    };

    consult.fetchResult = function(hexagram){
      consult.figures.consult(hexagram).then(function(hexagram){
        var changingLines = [];
        _.each(hexagram.lines, function(l){ changingLines.push(l.changing ? 1 : 0) });
        $timeout(function(){
          $state.transitionTo('iChing.consult.result', {
            hexCl: changingLines.toString(),
            hexId: hexagram.id
          })
        }, 1000);
      });
    };

    consult.reset = function(){
      consult.changingHexagram = new ChangingHexagram();
      $state.transitionTo('iChing.consult.consider');
    }
  }
})();
