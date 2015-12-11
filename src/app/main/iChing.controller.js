(function(){
  'use strict';

  angular.module('iChing')
    .controller('iChingCtrl', iChingCtrl)
    .controller('HexagramCtrl', HexagramCtrl);

  function iChingCtrl($scope, $state, $q, figures, ChangingHexagram) {
    var ic = this;
    ic.figures = figures;
    ic.consult = consult;

    // 1 = Yang   (solid line)
    // 0 = Yin    (broken line)

    //function ask(){
    //  var flatHexagram = [];
    //  if(figures.hexagram.array.length < 6) {
    //    figures.hexagram.addLine();
    //    if(figures.hexagram.array.length % 3 == 0) {
    //      var index = figures.hexagram.array.length === 3 ? 0 : 1;
    //      _.each(figures.hexagram.array, function(a){ flatHexagram.push(a.value) });
    //      var tr = _.chunk(flatHexagram, 3);
    //      figures.hexagram.trigrams.push(_.find(figures.trigrams, function(t){
    //        return _.isEqual(t.sequence, tr[index])
    //      }));
    //      window.console.log('figures.hexagram.array:', flatHexagram, figures.hexagram.trigrams);
    //    }
    //  } else {
    //    var hexagram = _.find(figures.hexagrams, function(h){
    //      return _.isEqual(h.trigrams, [figures.hexagram.trigrams[0].order, figures.hexagram.trigrams[1].order])
    //    });
    //    window.console.log('hexagram:', hexagram);
    //    ic.consult();
    //  }
    //}

    ////////
    // Latest Attempt...
    ////////

    ic.changingHexagram = new ChangingHexagram();

    ic.tossCoins = function(){
      ic.changingHexagram.addLine();
      var idx = ic.changingHexagram.lines.length === 3 ? 0 : 1;
      if(ic.changingHexagram.lines.length % 3 === 0){
        var seq = _.chunk(ic.changingHexagram.sequence, 3);
        var tri = _.find(figures.trigrams, function(t){ return _.isEqual(t.sequence, seq[idx]) });
        ic.changingHexagram.trigrams.push(tri);
      }
      if(ic.changingHexagram.lines.length < 6){
        window.console.log('changing hexagram:', ic.changingHexagram);
      } else {
        ic.changingHexagram.isComplete = true;
        window.console.log(ic.changingHexagram.lines.length + ' lines reached!');
        window.console.log('changing hexagram:', ic.changingHexagram);
      }
    };

    function consult(hexagram){
      window.console.log('pre-consultation hexagram:', hexagram);
      figures.consult(hexagram).then(function(hexagram){
        window.console.log('post-consultation hexagram:', hexagram);
        $state.transitionTo('consult.result', {hexParams: hexagram.params});
      });
    }
  }

  function HexagramCtrl($stateParams, Hexagram){
    var hex = this;
    hex.hexagram = new Hexagram($stateParams.hexParams);
    //hex.hexagram = figures.fetchHexagramById($stateParams.hexId);
    window.console.log('post-transition hexagram:', hex.hexagram);
    //window.console.log('hex.hexagram:', hex.hexagram);
  }
})();
