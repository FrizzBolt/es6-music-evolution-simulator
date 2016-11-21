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
