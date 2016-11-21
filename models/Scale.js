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
