import {Tone} from '/Tone.js';

export class Scale {
  constructor(baseTone) {
    this.basetone = baseTone;
  }

  scaleArray() {
    baseNum = this.baseTone.num();
    output = [];
    for (i = 0; i < NOTES_IN_SCALE; i++){
      output.push(new Tone(baseNum + i);
    }
    return output;
  }
}
