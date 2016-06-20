import {Melody} from '/Melody.js';
import {MelodyMutator} from '/MelodyMutator.js';

export class DurationSubMutator extends MelodyMutator {
  constructor(melody) {
    super(melody);
  }

  mutateRandomDurations() {
    var note1 = this.randomNote;
    var note2 = this.randomNote;
    note1 += 1;
    note2 += 1;
  }
}
