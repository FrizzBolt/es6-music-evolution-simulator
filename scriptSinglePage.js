const NOTES_IN_SCALE = 8;
const DURATION_OF_MELODY = 10;
const BEATS_PER_MINUTE = 160;
const MAXIMUM_NOTE_LENGTH = 2;
const MUTATION_FREQUENCY = 1;

var ctx = new(window.AudioContext || window.webkitAudioContext)(); // define audio context

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

    isProperLength() {
        //Error handling for length of melody
        return (this.calculateLength === DURATION_OF_MELODY);
    }
}

class MelodyMutator {
    constructor(melody, scale) {
        this.melody = melody;
        this.scale = scale;
        this.subMutators = [];
    }

    get Melody() {
        return this.melody;
    }

    set Melody(value) {
        this.melody = value;
    }

    get SubMutators() {
        return this.subMutators;
    }

    set SubMutators(value) {
        this.subMutators = value;
    }

    get Scale() {
        return this.scale;
    }

    set Scale(value) {
        this.scale = value;
    }

    activateTheMutator() {
        var randIndex = Math.floor(Math.random() * this.subMutators.length)
        return this.subMutators[randIndex].action();
    }
}

class ToneSubMutator {
    constructor(parentMutator) {
        this.parentMutator = parentMutator;
    }

    action() {
        console.log("Tone Mutator Activated")
        var newNotesArray = this.parentMutator.Melody.ArrayOfNotes
        var randScaleIndex = Math.floor(Math.random() * NOTES_IN_SCALE);
        var randMelodyIndex = Math.floor(Math.random() * newNotesArray.length);
        newNotesArray[randMelodyIndex] = new Note(this.parentMutator.Scale.scaleArray()[randScaleIndex], newNotesArray[randMelodyIndex].DurationInBeats);
        return new Melody(newNotesArray);
    }
}

class DurationSubMutator {
    constructor(parentMutator) {
        this.parentMutator = parentMutator;
    }

    action() {
        console.log("Duration Mutator Activated")
        var newNotesArray = this.parentMutator.Melody.ArrayOfNotes
        var randIndMelody = Math.floor(Math.random() * newNotesArray.length);
        var randIndMelody2 = Math.floor(Math.random() * newNotesArray.length);
        var newToneNum = newNotesArray[randIndMelody].Tone.Num;
        var newToneNum2 = newNotesArray[randIndMelody2].Tone.Num;
        var newTone1 = new Tone(newToneNum);
        var newTone2 = new Tone(newToneNum2);
        if ((newNotesArray[randIndMelody].DurationInBeats > 2) && (newNotesArray[randIndMelody2].DurationInBeats > 1) ||
            (newNotesArray[randIndMelody].DurationInBeats > 1) && (newNotesArray[randIndMelody2].DurationInBeats > 2))
            {
            newNotesArray[randIndMelody] = new Note(newTone1, (newNotesArray[randIndMelody].DurationInBeats + 1))
            newNotesArray[randIndMelody2] = new Note(newTone2, (newNotesArray[randIndMelody2].DurationInBeats - 1))
            }
        return new Melody(newNotesArray);
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
            var yPosition = NOTES_IN_SCALE - note.Tone.Num;
            for (var j = 0; j < note.durationInBeats; j++) {
                outputArray[yPosition][j + indexPointer] = true;
            }
            indexPointer += note.DurationInBeats;
        }
        console.log(outputArray);
        return outputArray;
    }
}

class Note {
    constructor(tone, durationInBeats) {
        this.tone = tone;
        this.durationInBeats = durationInBeats;
    }

    get DurationInBeats() {
        return this.durationInBeats;
    }

    set DurationInBeats(newDuration) {
        this.beatDuration = newDuration;
    }

    get Tone() {
        return this.tone;
    }

    set Tone(value) {
        this.tone = value;
    }

    num() {
        return this.tone.Num;
    }

    duration() {
        return (1 / (BEATS_PER_MINUTE / 60) * this.durationInBeats);
    }

    frequency() {
        return this.tone;
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
            osc.frequency.value = note.Tone.frequency();
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
            var note = new Note(randomToneFromScale, durationArray[i]);
            outputArray.push(note);
        }
        return new Melody(outputArray);
    }
}

class Scale {
    constructor(baseTone) {
        this.baseTone = baseTone;
    }

    scaleArray() {
        var baseNum = this.baseTone.Num;
        var output = [];
        for (var i = 0; i < NOTES_IN_SCALE; i++) {
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

var canvas = new fabric.Canvas('c');

var noteGrid = new fabric.Rect({
    originX: 'center',
    originY: 'center',
    fill: '#D5D5D5',
    width: 400,
    height: 200
});

var heightInCells = DURATION_OF_MELODY;
var widthInCells = NOTES_IN_SCALE;
var cellWidth = noteGrid.width / widthInCells;
var cellHeight = noteGrid.height / heightInCells;



var createNotes = function(array) {
    var outputArray = [noteGrid]
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[0].length; j++) {
            if (array[i][j]) {
                var note = new fabric.Rect({
                    left: (cellWidth * j),
                    top: (cellHeight * i),
                    fill: '#2A4A64',
                    width: cellWidth,
                    height: cellHeight,
                });
                outputArray.push(note);
            }
        }
    }
    return outputArray;
}


var drawNotesOnGrid = function(array) {
    var notes = createNotes(array);
    return new fabric.Group((notes), {
        left: 0,
        top: 0,
        angle: 0,
        hasRotatingPoint: false,
        hasControls: false
    })
};

////////////////////////////////////////////////////////////////////////////////////

$("#generate").click(function() {
    var tone = new Tone(0)
    var scale = new Scale(tone);
    currentScale = scale;
    var generator = new RandomMelodyGenerator(scale);
    var randomMelody = generator.generateRandomMelody();
    currentMelody = randomMelody;
    var visualizer = new MelodyVisualizationConverter(currentMelody);
    canvas.add(drawNotesOnGrid(visualizer.convertMelodyToArray()));
});

$("#play").click(function() {
    Player.play(currentMelody)
})

$("#mutate").click(function() {
    var mutator = new MelodyMutator(currentMelody, currentScale);
    mutator.SubMutators = [new ToneSubMutator(mutator), new DurationSubMutator(mutator)];
    currentMelody = mutator.activateTheMutator();
    var visualizer = new MelodyVisualizationConverter(currentMelody);
    canvas.add(drawNotesOnGrid(visualizer.convertMelodyToArray()));
})
