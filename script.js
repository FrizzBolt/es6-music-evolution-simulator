const NOTES_IN_SCALE = 8;
const DURATION_OF_MELODY = 12;
const BEATS_PER_MINUTE = 120;
const MAXIMUM_NOTE_LENGTH = 4;
const MUTATION_FREQUENCY = 1;

var currentMelody;
var currentScale;

$("#generate").click(function(){
    var tone = new Tone(0)
    var scale = new Scale(tone);
    currentScale = scale;
    var generator = new RandomMelodyGenerator(scale);
    var randomMelody = generator.generateRandomMelody();
    currentMelody = randomMelody;
    var visualizer = new MelodyVisualizationConverter(randomMelody);
    visualizer.convertMelodyToArray()
});

$("#play").click(function(){
		Player.play(currentMelody)
})

$("#mutate").click(function(){
		var mutator = new MelodyMutator(currentMelody, currentScale);
		currentMelody = mutator.activateTheMutator();
})
