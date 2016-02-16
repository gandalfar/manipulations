import Ember from 'ember';

export default Ember.Component.extend({
  mediaConstraints: {audio: true},
  audioBlobs: Ember.A([]),

  didInsertElement() {
    var self = this;
    self._super(...arguments);

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
    console.log(this.get('audioBlobs'));
  },

  actions: {
    startRecording() {
      this.get('mediaRecorder').start(2000);
    },

    stopRecording() {
      var self = this,
          mediaRecorder = this.get('mediaRecorder');

      mediaRecorder.stop();

      new ConcatenateBlobs(this.get('audioBlobs'), 'audio/wav', function(resultingBlob) {
        self.set('blobURL', URL.createObjectURL(resultingBlob));
      });
    }
  }
});
