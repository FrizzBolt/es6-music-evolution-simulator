import {Melody} from 'Melody';
import {MelodyMutator} from 'MelodyMutator';

export class ToneSubMutator {
  constructor(parentMutator){
    this.parentMutator = parentMutator;
  }

  action(){
    var randScaleIndex = Math.floor(Math.random() * NOTES_IN_SCALE);
    var randMelodyIndex = Math.floor(Math.random() * this.melody.length);
    var newNotesArray = this.melody.ArrayOfNotes;
    newNotesArray[randMelodyIndex] = this.scale.scaleArray()[randScaleIndex];
    return new Melody(newNotesArray);
  }
}
