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
