import {Melody} from '/Melody.js';

export class Player {
  constructor(melody) {
    this.melody = melody;
  }

  play() {
		var ctx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context
    var osc;
    var note;
    var duration;
    var t = ctx.currentTime;
    for (var i = 0; i < this.melody.notesArray.length; i++) {
        note = this.melody.notesArray[i];
        osc = ctx.createOscillator();
        duration = note.duration();
        osc.type = "sine"
        osc.frequency.value = note.frequency();
        osc.start(t);
        osc.stop(t + note.duration());
        t += note.duration();
        console.log(t);
        osc.connect(ctx.destination);
    }
  }
}
