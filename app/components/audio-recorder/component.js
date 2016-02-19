import Ember from 'ember';

export default Ember.Component.extend({
  mediaConstraints: {audio: true},
  audioBlobs: Ember.A([]),
  recording: false,
  mediaRecorder: null,

  didInsertElement() {
    this._super(...arguments);

    var self = this;

    navigator.getUserMedia(
      this.get('mediaConstraints'),
      function(stream) { self.onMediaSuccess(stream); },
      function() { self.onMediaError(); }
    );
  },

  onMediaSuccess(stream) {
    var self = this;

    var mediaRecorder = new MediaStreamRecorder(stream);
    mediaRecorder.mimeType = 'audio/wav';
    mediaRecorder.audioChannels = 1;
    mediaRecorder.ondataavailable = function(blob) {
      self.onDataAvailable(blob);
    };

    this.set('mediaRecorder',  mediaRecorder);
  },

  onMediaError() {

  },

  onDataAvailable(blob) {
    this.get('audioBlobs').pushObject(blob);
  },

  actions: {
    startRecording() {
      this.get('mediaRecorder').start(2000);
      this.set('recording', true);
    },

    stopRecording() {
      var self = this,
          mediaRecorder = this.get('mediaRecorder');

      mediaRecorder.stop();
      this.set('recording', false);

      new ConcatenateBlobs(this.get('audioBlobs'), 'audio/wav', function(resultingBlob) {
        self.set('blobURL', URL.createObjectURL(resultingBlob));
        self.get('audioBlobs').clear();
      });
    }
  }
});
