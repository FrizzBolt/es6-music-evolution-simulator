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
    foreach (note in melodyArray) {
      
    }
  }
}
