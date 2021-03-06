class Player {
    static play(melody) {
        var osc;
        var note;
        var duration;
        var t = ctx.currentTime;
        console.log(melody.ArrayOfNotes.length);
        console.log()
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
