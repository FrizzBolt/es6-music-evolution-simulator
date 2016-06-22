import {Melody} from 'Melody';

export class MelodyVisualizationConverter {
  constructor(melody) {
    this.melody = melody;
  }

  generateEmptyNestedArray() {
    var outputArray = [];
    for (var i = 0; i < NOTES_IN_SCALE; i++) {
      outputArray.push(new Array(DURATION_OF_MELODY).fill(false));
    }
    return outputArray;
  }

  convertMelodyToArray() {
    var melodyArray = this.melody.arrayOfNotes;
    var outputArray = this.generateEmptyNestedArray();
    var indexPointer = 0;
    for (var i = 0; i < melodyArray.length; i++) {
    	var note = melodyArray[i];
      for (var j = 0; j < note.durationInBeats; j++) {
          outputArray[i][j + indexPointer] = true;

      }
      indexPointer += 1;
    }
    return outputArray;
  }
}
