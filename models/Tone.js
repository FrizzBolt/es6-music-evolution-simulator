const NOTES_IN_SCALE = 8;
const DURATION_OF_MELODY = 12;
const BEATS_PER_MINUTE = 100;
const MAXIMUM_NOTE_LENGTH = 4;


export class Tone {
  constructor(num) {
    this.num = num;
  }

  get num() {
    return this.num;
  }

  frequency() {
    440 * Math.pow(2, (this.num / 12));
  }
}
