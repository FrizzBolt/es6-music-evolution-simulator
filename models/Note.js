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
