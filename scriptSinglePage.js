const NOTES_IN_SCALE = 12;
const DURATION_OF_MELODY = 3;
const BEATS_PER_MINUTE = 160;
const MAXIMUM_NOTE_LENGTH = 1;
const MUTATION_FREQUENCY = 1;
var ctx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context

class Melody {
  constructor(arrayOfNotes) {
    this.arrayOfNotes = arrayOfNotes;
  }

  get ArrayOfNotes() {
    return this.arrayOfNotes;
  }

  set ArrayOfNotes(array) {
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

class MelodyMutator {
  constructor (melody, scale, subMutators){
    this.melody = melody;
    this.scale = scale;
  }

  mutateDuration() {
  	var randIndMelody = Math.floor(Math.random() * MAXIMUM_NOTE_LENGTH);
    var randIndMelody2 = Math.floor(Math.random() * MAXIMUM_NOTE_LENGTH);
    var newNotesArray = this.melody.ArrayOfNotes;
    console.log(newNotesArray)
		newNotesArray[randIndMelody].beatDuration - 1;
    newNotesArray[randIndMelody2].beatDuration + 1;
    return new Melody(newNotesArray);
  }

  mutatePitch(){
    var randScaleIndex = Math.floor(Math.random() * NOTES_IN_SCALE);
    var randMelodyIndex = Math.floor(Math.random() * this.melody.length);
    var newNotesArray = this.melody.ArrayOfNotes;
    newNotesArray[randMelodyIndex] = this.scale.scaleArray()[randScaleIndex];
    return new Melody(newNotesArray);
  }

  activateTheMutator() {
		var rand = Math.floor((Math.random() * 2))
    console.log(rand);
    if (rand === 0) {
    	return this.mutatePitch();
    }
    else {
    	return this.mutateDuration();
    }
  }
}

class MelodyVisualizationConverter {
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

class Note {
  constructor(tone, durationInBeats) {
    this.tone = tone;
    this.durationInBeats = durationInBeats;
  }

  get beatDuration() {
    return this.durationInBeats;
  }

  set beatDuration(newDuration) {
  	this.beatDuration = newDuration;
  }

  Num() {
    return this.tone.num;
  }

  duration() {
    return (1 / (BEATS_PER_MINUTE / 60) * this.durationInBeats);
  }

  frequency() {
  	return this.tone
  }
}

class Player {
  static play(melody) {
    var osc;
    var note;
    var duration;
    var t = ctx.currentTime;
    for (var i = 0; i < melody.ArrayOfNotes.length; i++) {
        note = melody.ArrayOfNotes[i];
        osc = ctx.createOscillator();
        duration = note.duration();
        osc.type = "sine"
        osc.frequency.value = note.frequency();
        osc.start(t);
        osc.stop(t + note.duration());
        t += note.duration();
        osc.connect(ctx.destination);
    }
  }
}

class RandomMelodyGenerator {
  constructor(scale) {
    this.scale = scale;
  }

  calculateRandomNoteDurationArray() {
    var outputArray = []
    var remainder = DURATION_OF_MELODY
    while (remainder > MAXIMUM_NOTE_LENGTH) {
      var randomLength = Math.floor((Math.random() * MAXIMUM_NOTE_LENGTH) + 1)
      outputArray.push(randomLength);
      remainder -= randomLength;
    }
    outputArray.push(remainder)
    return outputArray;
  }

  generateRandomMelody() {
    var outputArray = []
    var durationArray = this.calculateRandomNoteDurationArray()
    for (var i = 0; i < durationArray.length; i++) {
      var positionOnScale = Math.floor((Math.random() * NOTES_IN_SCALE))
      var randomToneFromScale = this.scale.scaleArray()[positionOnScale];
      var note = new Note(randomToneFromScale.frequency(), durationArray[i]);
      outputArray.push(note);
    }
    return new Melody(outputArray);
  }
}

class Scale {
  constructor(baseTone){
    this.baseTone = baseTone;
  }

  scaleArray() {
    var baseNum = this.baseTone.Num;
    var output = [];
    for (var i = 0; i < NOTES_IN_SCALE; i++){
      output.push(new Tone(baseNum + i));
    }
    return output;
  }
}

class Tone {
  constructor(num) {
    this.num = num;
  }

  get Num() {
  	return this.num;
  }

  set Num(number) {
  	this.num = number;
  }

  frequency() {
    return 440 * Math.pow(2, (this.Num / 12));
  }
}

var currentMelody;
var currentScale;

$("#generate").click(function(){
    var tone = new Tone(0)
    var scale = new Scale(tone);
    currentScale = scale;
    var generator = new RandomMelodyGenerator(scale);
    var randomMelody = generator.generateRandomMelody();
    currentMelody = randomMelody;
    var visualizer = new MelodyVisualizationConverter(randomMelody);
    visualizer.convertMelodyToArray()
});

$("#play").click(function(){
		Player.play(currentMelody)
})

$("#mutate").click(function(){
		var mutator = new MelodyMutator(currentMelody, currentScale);
		currentMelody = mutator.activateTheMutator();
})
