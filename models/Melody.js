export class Melody {
  constructor(arrayOfNotes) {
    this.arrayOfNotes = arrayOfNotes;
  }

  get notesArray() {
    return this.arrayOfNotes;
  }

  set notesArray(array) {
    this.arrayOfNotes = array;
  }

  calculateLength() {
    var finalDuration = 0;
    for (var noteDuration in this.arrayOfNotes) {
      finalDuration += noteDuration;
    }
    return finalDuration;
  }

  //Error handling for length of melody
  isProperLength() {
    return (this.calculateLength === DURATION_OF_MELODY);
  }
}
