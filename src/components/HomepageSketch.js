import React from "react";
import Sketch from 'react-p5'

const HomepageSketch = (props) => {
    console.log(props.windowHeight)

    // Calculate initial height and width
    const hwRatio = 4
    const h = Math.floor(props.windowHeight/9);
    const w = Math.floor(h * hwRatio)
    // Calculate inner box height and width
    const factorCalc = (f1, f2) => {return Math.floor(f1 * f2)}
    const bwFactor = 0.75
    const bhFactor = 0.75
    const bw = factorCalc(w, bwFactor)
    const bh = factorCalc(h, bhFactor)
    // Calculate text height and width
    const twFactor = 0.75
    const thFactor = 0.75
    const tw = factorCalc(bw, twFactor)
    const th = factorCalc(bh, thFactor)
    // Calculate padding
    const padCalc = (f1, f2) => {return Math.floor((f1 - f2)/2)}
    const padH = padCalc(h, bh)
    const padW = padCalc(w, bw)
    const textPadH = padCalc(bh, th)
    const textPadW = padCalc(bw, tw)
    // Calculate origin points of box and text
    const bx = padW
    const by = padH
    const tx = padW + textPadW
    const ty = padH + textPadH + th

    var movingLines = []


    // p5.line(0, 0, 0, h)
    // p5.line(w, 0, w, h)
    // p5.line(0, 0, w, 0)
    // p5.line(0, h, w, h)



    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(w, h).parent(canvasParentRef)
        p5.background(255, 255, 255)
        p5.frameRate(30)
        p5.textSize(th)

        // Setup outer box

        movingLines.push(new MovingLine(0, 0, 0, h, 0.5, 0))
        movingLines.push(new MovingLine(w, 0, w, h, 0.5, 0.25))
        movingLines.push(new MovingLine(0, 0, w, 0, 0.5, 0.5))
        movingLines.push(new MovingLine(w, h, 0, h, 0.5, 0.75))

        for (let x1 = -200; x1 < w + 200; x1 += 20) {
            var x2 = get_x2(x1, 0, h, 45)
            movingLines.push(new MovingLine(x1, 0, x2, h, 0.9, p5.random()))
            x2 = get_x2(x1, 0, h, -45)
            movingLines.push(new MovingLine(x1, 0, x2, h, 0.9, p5.random()))

        }


    }

    const lerp = (x, y, a) => x * (1 - a) + y * a

    const get_x2 = (x1, y1, y2, degrees) => {
        const h = y2 - y1;
        return (x1 + h * Math.tan(degrees * Math.PI / 180))
    }

    class MovingLine {
        // Length = pct of line

        constructor(x1, y1, x2, y2, length, initial_front) {
            this.x1 = x1
            this.y1 = y1
            this.x2 = x2
            this.y2 = y2
            this.length = length
            this.start = 0
            this.end = 1
            this.front = initial_front
            this.back = this.front - this.length
        }

        reset() {
            this.front = this.start
            this.back = this.front - this.length
        }

        step(p5) {
            this.front += 0.01
            this.back += 0.01
            var b = Math.max(this.back, this.start)
            var f = Math.max(this.front, this.start)

            this.drawLine(p5, this.start, b, 255)  // White
            this.drawLine(p5, b, f, 0)             // Black
            this.drawLine(p5, f, this.end, 255)    // White

            if (this.back >= this.end) {
                this.reset()
            }
        }

        drawLine(p5, lineStart, lineEnd, color) {
            // Get point for front of line
            var pxf = lerp(this.x1, this.x2, lineEnd)
            var pyf = lerp(this.y1, this.y2, lineEnd)
            // Get point for back of line
            var pxb = lerp(this.x1, this.x2, lineStart)
            var pyb = lerp(this.y1, this.y2, lineStart)

            p5.stroke(color)
            p5.line(pxb, pyb, pxf, pyf)

        }
    }

    // const border = p5 => {
    //     p5.line(0, 0, 0, h)
    //     p5.line(w, 0, w, h)
    //     p5.line(0, 0, w, 0)
    //     p5.line(0, h, w, h)
    // }

    const draw = p5 => {
        for (var movingLine of movingLines) {
            movingLine.step(p5)
        }



        p5.fill(255)
        // Setup inner box
        p5.rect(bx, by, bw, bh)
        p5.fill(0)
        p5.stroke(0)
        p5.text('Max Chis', tx, ty)

    }

    return (<Sketch setup={setup} draw={draw} />)
}

export default HomepageSketch