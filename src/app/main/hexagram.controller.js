(function(){
  'use strict';

  angular.module('iChing')
    .controller('HexagramCtrl', HexagramCtrl);

  function HexagramCtrl($stateParams, Hexagram){
    var hex = this;
    hex.hexagram = new Hexagram($stateParams.hexId, $stateParams.hexCl);
    hex.anyChangingLines = _.any(hex.hexagram.lines, 'changing');
    for(var i = 0; i < hex.hexagram.props.changing.length; i++){
      hex.hexagram.props.changing[i].value = hex.hexagram.props.sequence[i] === 0 ? 6 : 9;
      hex.hexagram.props.changing[i].inHexagram = hex.hexagram.lines[i].changing;
      hex.hexagram.props.changing[i].isSelected = false;
    }

    hex.descriptions = [
      {
        order: 1,
        name: 'Sees',
        slug: 'sees',
        isSelected: false
      },
      {
        order: 2,
        name: 'Suggests',
        slug: 'suggests',
        isSelected: false
      }
    ];
    hex.descriptionOpen = false;
    hex.toggleDescriptionMenu = function(sectionName){
      if(sectionName){
        hex.toggleDescription(sectionName);
      }
      hex.descriptionOpen = !hex.descriptionOpen;
    };
    hex.toggleDescription = function(sectionName) {
      var description = _.find(hex.descriptions, function(d){ return d.name === sectionName; });
      var otherDescriptions = _.without(hex.descriptions, description);
      if(!description.isSelected){
        _.each(otherDescriptions, function(od){ od.isSelected = false; });
        description.isSelected = true;
        //window.console.log('toggled:', sectionName, description, otherDescriptions);
      }
    };

    hex.menuOpen = false;
    hex.toggleMenu = function(idx, array){
      if(idx || array){
        hex.toggleSelectionInArray(idx, array);
      }
      hex.menuOpen = !hex.menuOpen;
    };
    hex.toggleSelectionInArray = function(idx, array) {
      if(!array[idx].isSelected) {
        _.each(_.without(array, array[idx]), function(item){ item.isSelected = false; });
        array[idx].isSelected = true;
      }
    };
  }

})();
