import Ember from 'ember';

export default Ember.Controller.extend({
  sortFinishText: null,

  clipsList: Ember.A([
    {id: 1, mp3: '/mp3/01-povabilo.mp3', text: 'Hvala lepa za povabilo'},
    {id: 2, mp3: '/mp3/02-gotovo.mp3', text: 'Gotovo bolj, kot je bila, v času ko je prejšnja predsednica vlade sporočila, da odstopa s položaja'},
  ]),

  sortableObjectList: Ember.A([]),
  playIndex: -1,

  actions: {
    dragStart: function(object) {
    },
    sortEndAction: function() {
    },

    selectClip: function(clip) {
      this.sortableObjectList.pushObject(Ember.copy(clip));
    },

    playSortedClips: function() {
      this.incrementProperty('playIndex');
    },

    autoPlayFinished: function() {
      console.log('recieved');
      this.incrementProperty('playIndex');
    }
  }

});
