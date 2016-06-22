import {Melody} from 'Melody';
import {MelodyMutator} from 'MelodyMutator';

export class DurationSubMutator {
  constructor(parentMutator){
    this.parentMutator = parentMutator;
  }

  action(){
    var randIndMelody = Math.floor(Math.random() * MAXIMUM_NOTE_LENGTH);
    var randIndMelody2 = Math.floor(Math.random() * MAXIMUM_NOTE_LENGTH);
    var newNotesArray = this.melody.ArrayOfNotes;
		newNotesArray[randIndMelody].DurationInBeats - 1;
    newNotesArray[randIndMelody2].DurationInBeats + 1;
    return new Melody(newNotesArray);
  }
}
