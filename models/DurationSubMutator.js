import {Melody} from '/Melody.js';
import {MelodyMutator} from '/MelodyMutator.js';

export class DurationSubMutator extends MelodyMutator {
  constructor(melody) {
    super(melody);
  }

  static action() {
    super.randomNote().durationInBeats - 1;
    super.randomNote().durationInBeats + 1;
  }
}
