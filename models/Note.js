import {Tone} from 'Tone';

export class Note {
  constructor(tone, durationInBeats) {
    this.tone = tone;
    this.durationInBeats = durationInBeats;
  }

  get beatDuration() {
    return this.durationInBeats;
  }

  set beatDuration(newDuration) {
  	this.beatDuration = newDuration;
  }

  Num() {
    return this.tone.num;
  }

  duration() {
    return (1 / (BEATS_PER_MINUTE / 60) * this.durationInBeats);
  }

  frequency() {
  	return this.tone
  }
}
