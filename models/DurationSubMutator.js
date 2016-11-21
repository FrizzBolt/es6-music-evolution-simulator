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
        if ((newNotesArray[randIndMelody].DurationInBeats > 1) && (newNotesArray[randIndMelody2].DurationInBeats > 1))
            newNotesArray[randIndMelody] = new Note(newTone1, (newNotesArray[randIndMelody].DurationInBeats + 1))
        newNotesArray[randIndMelody2] = new Note(newTone2, (newNotesArray[randIndMelody2].DurationInBeats - 1))
        return new Melody(newNotesArray);
    }
}
