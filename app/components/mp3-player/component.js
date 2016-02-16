import Ember from 'ember';

export default Ember.Component.extend({
  sound: null,
  playing: false,
  classNames: ['clip-listing--wrapper', 'clearfix'],

  didInsertElement() {
    this._super(...arguments);

    var self = this;
    soundManager.onready(function() {
      self.get('controller').send('loadSound');
    });
  },

  didUpdateAttrs() {
    this._super(...arguments);

    let shouldAutoPlay = this.get('shouldAutoPlay');
    console.log(shouldAutoPlay);
    if ( shouldAutoPlay ) {
      this.play();
    }

  },

  playPauseLink: function() {
    if (this.get('playing')) {
      return 'Pause';
    } else {
      return 'Play';
    }
  }.property('playing'),

  play: function() {
    var sound = this.get('sound');
    sound.setPosition(0);
    sound.play();
    this.set('playing', true);
  },

  pause: function() {
    this.get('sound').pause();
    this.set('playing', false);
  },

  finish: function() {
    var self = this;

    this.set('playing', false);
    this.set('started', false);

    if ( this.get('shouldAutoPlay') ) {
      Ember.run(this, function(){
        self.sendAction('autoPlayFinished');
      }, 1500);
    }
  },

  stop: function() {
    this.get('sound').stop();
    this.finish();
  },

  actions: {
    loadSound: function() {
      var self = this;
      var sound = soundManager.createSound({
        url: this.get('mp3file'),
        onfinish: function() { self.finish(); }
      });

      this.set('sound', sound);
    },

    playPause: function() {
      if (this.get('playing')) {
        this.pause();
      } else {
        this.play();
      }
    },

    selectClip: function() {
      this.sendAction('selectClip');
    }
  }
});
