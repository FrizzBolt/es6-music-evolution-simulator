import {Tone} from '/Tone.js';

export class Note {
  constructor(tone, durationInBeats) {
    this.tone = tone;
    this.durationInBeats = durationinBeats;
  }

  duration() {
    return (1 / (BEATS_PER_MINUTES / 60) * durationInBeats);
  }
}
