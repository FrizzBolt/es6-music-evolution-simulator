import {Scale} from '/Scale.js';
import {Tone} from '/Tone.js';
import {Note} from '/Note.js';

export class MelodyGenerator {
  constructor(scale) {
    this.scale = scale;
  }



  calculateRandomNoteDurationArray() {
    var outputArray = []
    var remainder = DURATION_OF_MELODY
    while (remainder < MAXIMUM_NOTE_LENGTH) {
      randomLength = Math.floor((Math.random() * MAXIMUM_NOTE_LENGTH) + 1)
      outputArray.push(randomLength);
      remainder -= randomLength;
    }
    outputArray.push(remainder);
    return outputArray;
  }

  generateRandomMelody() {
    outputArray = []
    for (duration in this.calculateRandomNoteDurationArray()) {
      var positionOnScale = Math.floor((Math.Random() * NOTES_IN_SCALE) + 1)
      var randomToneFromScale = scale.scaleArray()[positiononScale];
      var note = new Note(randomToneFromScale.frequency(), duration);
      outputArray.push(note);
    }
    return outputArray;
  }
}
