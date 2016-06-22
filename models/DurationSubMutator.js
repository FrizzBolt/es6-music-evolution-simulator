import {Melody} from '/Melody.js';
import {MelodyMutator} from '/MelodyMutator.js';

export class DurationSubMutator {
  constructor(parentMutator){
    this.parentMutator = parentMutator;
  }

  action(){
    var randIndMelody = Math.floor(Math.random() * MAXIMUM_NOTE_LENGTH);
    var randIndMelody2 = Math.floor(Math.random() * MAXIMUM_NOTE_LENGTH);
    var newNotesArray = this.melody.ArrayOfNotes;
    console.log(newNotesArray)
		newNotesArray[randIndMelody].beatDuration - 1;
    newNotesArray[randIndMelody2].beatDuration + 1;
    return new Melody(newNotesArray);    
  }
}
