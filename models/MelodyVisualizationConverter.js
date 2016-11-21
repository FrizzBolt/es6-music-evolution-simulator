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
