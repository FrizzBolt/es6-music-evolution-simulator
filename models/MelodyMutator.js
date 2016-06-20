import {Scale} from '/Scale.js';
import {Melody} from '/Melody.js';

export class MelodyMutator {
  constructor (melody) {
    this.melody = melody;
    this.scale = scale;
  }

  randomNote() {
    arrayOfNotes = this.melody.arrayOfNotes;
    randomIndex = Math.floor((Math.Random() * arrayOfNotes.length));
    return arrayOfNotes[randomIndex];
  }


}
