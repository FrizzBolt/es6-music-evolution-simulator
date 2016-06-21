import {Tone} from '/Tone.js';

export class Note {
  constructor(tone, durationInBeats) {
    this.tone = tone;
    this.durationInBeats = durationInBeats;
  }

  durationInBeats() {
    return this.durationInBeats;
  }

  toneNum() {
    return this.tone.num;
  }

  duration() {
    return (1 / (BEATS_PER_MINUTE / 60) * this.durationInBeats);
  }

  frequency() {
  	return this.tone
  }
}
