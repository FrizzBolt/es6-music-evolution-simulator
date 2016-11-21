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
