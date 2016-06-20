import {Melody} from '/Melody.js';

export class Player {
  constructor(melody) {
    this.melody = melody;
  }

  play() {
    var osc;
    var t = ctx.currentTime;

    for (var i = 0; i < this.melody.arrayOfNotes.length; i++) {
        note = this.melody.arrayOfNotes[i];
        osc = ctx.createOscillator();
        duration = note.duration();
        osc.type = "sine"
        osc.frequency.value = note.frequency();
        osc.start(t);
        osc.stop(t + note.duration());
        t += note.duration;
        osc.connect(ctx.destination);
    }
  }
}
