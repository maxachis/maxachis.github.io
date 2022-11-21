import React from "react";
import Sketch from 'react-p5'

const HomepageSketch = () => {

    const w = 400;
    const h = 400;
    const xc = w/2;
    const yc = h/2;
    const xOrigin = xc/2 + 245;
    const yOrigin = yc/2 + 12;
    // const rMax = 100;
    // const rInc = 1;
    const xInc = 1;
    // const thetaVar = 0.01;
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(w, h).parent(canvasParentRef)
        p5.background(255, 255, 255)
        p5.textSize(64)
        p5.text('Max Chiş', xc/2, yc/2)
    }

    // var r = 0;
    // var thetaBase = 0;
    // var theta = 0;

    var i = 0;
    var x = xOrigin;
    var y = yOrigin;


    const draw = p5 => {
        if (x < 0 || y < yOrigin - 10) {
            x = xOrigin
            y = yOrigin
            p5.stroke(0, 0, 0, 255)

        }

        x -= xInc
        y += (p5.noise(i) - 0.5) * 2
        if (x < 100) {
            p5.stroke(0, 0, 0, x/100 * 255)
        }

        p5.ellipse(x, y, 0.5)

        //
        // if (r >= rMax) {
        //     r = 0;
        //     thetaBase = Math.random() * p5.TWO_PI;
        // }

        // theta = thetaBase + p5.noise(i)
        i += 0.2

        // p5.ellipse(xOrigin + r * Math.cos(theta), yOrigin + r * Math.sin(theta), 0.5)
        // r += rInc

    }

    return (<Sketch setup={setup} draw={draw} />)
}

export default HomepageSketch