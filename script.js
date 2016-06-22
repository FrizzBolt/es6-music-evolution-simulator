const NOTES_IN_SCALE = 8;
const DURATION_OF_MELODY = 12;
const BEATS_PER_MINUTE = 120;
const MAXIMUM_NOTE_LENGTH = 4;
const MUTATION_FREQUENCY = 1;

import Melody from 'models/Melody';
import Note from 'models/Note';
import Tone from 'models/Tone';
import Scale from 'models/Scale';
import Player from 'models/Player';
import RandomMelodyGenerator from 'models/RandomMelodyGenerator';
import ToneSubMutator from 'models/ToneSubMutator';
import DurationSubMutator from 'models/DurationSubMutator';
import MelodyVisualizationConverter from 'models/MelodyVisualizationConverter';

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
