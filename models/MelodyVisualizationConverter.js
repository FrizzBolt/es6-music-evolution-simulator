import {Melody} from '/Melody.js';

export class MelodyVisualizationConverter {
  constructor(melody) {
    this.melody = melody;
  }

  generateEmptyNestedArray() {
    var outputArray = [];
    for (i = 0; i < NOTES_IN_SCALE; i++) {
      outputArray.push(new Array(DURATION_OF_MELODY).fill(false));
    }
    return outputArray;
  }

  convertMelodyToArray() {
    melodyArray = this.melody.arrayOfNotes;
    outputArray = generateEmptyNestedArray();
    indexPointer = 0
    for (i = 0; i < melodyArray.length) {
      for (j = 0; j < note.durationInBeats; i++) {
          outputArray[i][j] = true
      }
      indexPointer += note.durationInBeats;
    }
    return outputArray;
  }
}
