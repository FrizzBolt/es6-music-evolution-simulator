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
