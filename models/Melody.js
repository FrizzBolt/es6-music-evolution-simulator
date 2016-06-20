export class Melody {
  constructor(arrayOfNotes) {
    this.arrayOfNotes = arrayOfNotes;
  }

  get arrayOfNotes() {
    return this.arrayOfNotes;
  }

  calculateLength() {
    var finalDuration = 0;
    for (noteDuration in this.arrayOfNotes) {
      finalDuration += noteDuration;
    }
    return finalDuration;
  }

  //Error handling for length of melody
  isProperLength() {
    return (this.calculateLength === DURATION_OF_MELODY);
  }
}
