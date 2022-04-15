// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const CircularVisualizer = new Visualizer(
  'anhduynguyen8598',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    let averageVal = 0;

    p5.background(0, 0, 0, 255);

    p5.noFill();

    let values = analyzer.getValue();

    if (values.length > 360) {
      values = values.slice(0, 360);
    }
    p5.stroke(255);
    p5.strokeWeight(3);
    p5.translate(width / 2, height / 2)
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      let amplitude = values[i] as number
      let r = p5.map(amplitude, 0, 1, 30, 2 * height);
      let x = r * Math.cos(i);
      let y = r * Math.sin(i);

      p5.point(x, y);
    }
    p5.endShape();
  },
);