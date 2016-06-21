import {Melody} from '/Melody.js';
import {MelodyMutator} from '/MelodyMutator.js';

export class ToneSubMutator extends MelodyMutator {
  constructor(melody) {
    super(melody);
  }

  static action() {
    randNum = Math.floor((Math.Random() * NOTES_PER_SCALE));
    super.randomNote().tone = super.scale.scaleArray()[randNum];
  }
}
