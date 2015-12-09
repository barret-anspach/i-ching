(function(){
  'use strict';

  angular.module('iChing')
    .controller('iChingCtrl', iChingCtrl)
    .controller('HexagramCtrl', HexagramCtrl);

  function iChingCtrl($scope, $state, $q, figures) {
    var ic = this;
    ic.figures = figures;
    ic.consult = consult;
    ic.ask = figures.ask;

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

    function consult(){
      figures.consult().then(function(hexagram){
        window.console.log('post-consultation hexagram:', hexagram);
        ic.hexagram = hexagram;
        $state.transitionTo('consult.result', {hexId: hexagram.props.hexagram.number});
      });
    }
  }

  function HexagramCtrl($stateParams, figures){
    var hex = this;
    hex.hexagram = figures.fetchHexagramById($stateParams.hexId);
    //window.console.log('hex.hexagram:', hex.hexagram);
  }
})();
