import {Tone} from '/Tone.js';

export class Scale {
  constructor(baseTone){
    this.baseTone = baseTone;
  }

  scaleArray() {
    var baseNum = this.baseTone.toneNum;
    var output = [];
    for (var i = 0; i < NOTES_IN_SCALE; i++){
      output.push(new Tone(baseNum + i));
    }
    return output;
  }
}
