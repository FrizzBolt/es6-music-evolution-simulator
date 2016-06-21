import {Scale} from '/Scale.js';
import {Melody} from '/Melody.js';

export class MelodyMutator {
  constructor (melody, scale, subMutators) {
    this.melody = melody;
    this.scale = scale;
    this.subMutators = [];
  }

  randomNote() {
    arrayOfNotes = this.melody.arrayOfNotes;
    randomIndex = Math.floor((Math.Random() * arrayOfNotes.length));
    return arrayOfNotes[randomIndex];
  }
}
