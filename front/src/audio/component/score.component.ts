/**
 * Created by gaob on 12/12/2016.
 */
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

declare var Vex: any;

@Component({
    moduleId: module.id,
    selector: 'score',
    template: ' <svg id="{{scoreId}}" />',
})
export class ScoreComponent implements OnInit, AfterViewInit  {


    @Input() scoreId = 'mySVGCanvas';
    notes: any;
    voice: any;
    constructor() {}

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {

        var Note = Vex.Flow.StaveNote;
        //Prepare data;
        this.notes = [
            // A quarter-note C.
            new Note({clef: "treble", keys: ["c/4"], duration: "q" }),

            // A quarter-note D.
            new Note({clef: "treble", keys: ["d/4"], duration: "q" }).addAccidental(0, new Vex.Flow.Accidental("b")),

            // A quarter-note rest. Note that the key (b/4) specifies the vertical
            // position of the rest.
            new Note({clef: "treble", keys: ["b/4"], duration: "qr" }),

            // A C-Major chord.
            new Note({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
        ];

        this.voice = new Vex.Flow.Voice({num_beats: 4,  beat_value: 4});
        this.voice.addTickables(this.notes);

        // Format and justify the notes to 400 pixels.
        let formatter = new Vex.Flow.Formatter().joinVoices([this.voice]).format([this.voice], 400);


        let area = document.getElementById(this.scoreId);
        let renderer = new Vex.Flow.Renderer( area, Vex.Flow.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(500, 500);
        let context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        let stave = new Vex.Flow.Stave(10, 40, 400);

        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();


        // Render voice
        this.voice.draw(context, stave);

    }
}