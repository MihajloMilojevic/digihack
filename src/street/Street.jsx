import React from 'react';
import Sketch from 'react-p5';

let bg;

const holes = []
let cars = []
const N = 30;
const HOLE_PROB = 0.001
const HOLE_DIST = 10
let full = false;

function distance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

const points = [
	// Vojvode Stepe
	{ id: 1, x: 35, y: 165, edges: [2, 5] },   // Vertex 1
	{ id: 2, x: 95, y: 135, edges: [3, 6] },   // Vertex 2
	{ id: 3, x: 175, y: 97, edges: [2, 4, 7] },   // Vertex 3
	{ id: 4, x: 261, y: 54, edges: [3, 8] },   // Vertex 4

	// Jovana Dučića
	{ id: 5, x: 68, y: 238, edges: [1, 6, 9] },   // Vertex 5
	{ id: 6, x: 129, y: 209, edges: [2, 5, 7, 10] },  // Vertex 6
	{ id: 7, x: 210, y: 170, edges: [3, 6, 8, 11] },  // Vertex 7
	{ id: 8, x: 297, y: 127, edges: [4, 7, 14] },  // Vertex 8

	// Futoški Put
	{ id: 9, x: 100, y: 315, edges: [5, 10, 15] },  // Vertex 9
	{ id: 10, x: 165, y: 285, edges: [6, 9, 12] }, // Vertex 10
	{ id: 11, x: 242, y: 239, edges: [7, 12] }, // Vertex 11
	{ id: 12, x: 249, y: 263, edges: [10, 11, 13, 16] }, // Vertex 12
	{ id: 13, x: 304, y: 257, edges: [12, 14] }, // Vertex 13
	{ id: 14, x: 353, y: 245, edges: [8, 13, 17] }, // Vertex 14

	// Patrijarha Pavla
	{ id: 15, x: 116, y: 350, edges: [9, 16] }, // Vertex 15
	{ id: 16, x: 292, y: 375, edges: [12, 15, 17] }, // Vertex 16
	{ id: 17, x: 425, y: 393, edges: [14, 16] }  // Vertex 17
];


class Car {
	constructor(p5, p, speed, red, green, blue) {
		this.p5 = p5;
		this.currentPos = p;
		this.speed = speed;
		this.red = red;
		this.blue = blue;
		this.green = green;
		let r = p5.floor(p5.random(0, this.currentPos.edges.length));
		let next = this.currentPos.edges[r]
		this.nextPos = points.find(p => p.id === next)
		this.t = 0;
	}
	show() {
		let x = this.p5.lerp(this.currentPos.x, this.nextPos.x, this.t);
		let y = this.p5.lerp(this.currentPos.y, this.nextPos.y, this.t);

		// Draw the red circle moving along the dots
		this.p5.fill(this.red, this.green, this.blue);
		this.p5.circle(x, y, 10);
		let L = this.p5.sqrt(this.p5.pow(this.currentPos.x - this.nextPos.x, 2) + this.p5.pow(this.currentPos.y - this.nextPos.y, 2))
		// Increment t for smooth movement
		this.t += this.speed * (100 / L);  // Adjust the speed if necessary

		const holeee_q = this.p5.random()
		if (holeee_q <= HOLE_PROB) {
			let closest = null;
			for (let h of holes) {
				if (closest == null) {
					closest = h;
					continue;
				}
				if (distance(h.x, h.y, x, y) < distance(closest.x, closest.y, x, y)) {
					closest = h;
				}
			}
			if (closest != null && distance(closest.x, closest.y, x, y) < HOLE_DIST) {
				closest.severity++;
			}
			else {
				holes.push({ x, y, severity: 1 })
			}
		}

		// Once t reaches 1, move to the next step
		if (this.t >= 1) {
			this.t = 0;
			this.currentPos = this.nextPos;
			let r = this.p5.floor(this.p5.random(0, this.currentPos.edges.length));
			let next = this.currentPos.edges[r]
			this.nextPos = points.find(p => p.id === next)
		}
	}
}


export default function Street() {
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
		bg = p5.loadImage(`${process.env.PUBLIC_URL}/ns2.png`)
		for (let i = 0; i < N; i++) {
			cars.push(new Car(p5, points[p5.floor(p5.random(points.length))], p5.random(0.005, 0.01), p5.floor(p5.random(255)), p5.floor(p5.random(255)), p5.floor(p5.random(255))))
		}
	}

	const draw = (p5) => {
		p5.background(bg);
		/*
		for(let p of points) {
		  for(let e of p.edges) {
			const oth = points.find(poin => poin.id === e)
			stroke("blue")
			strokeWeight(2)
			line(p.x, p.y, oth.x, oth.y)
		  }
		  fill("red")
		  circle(p.x, p.y, 15);
		  textAlign(CENTER)
		  fill("white")
		  stroke("black")
		  textSize(10)
		  text(p.id, p.x, p.y+3);
		}*/
		for (let hole of holes) {
			let t = ""
			switch (hole.severity) {
				case 1:
					t = "🟩";
					break;
				case 2:
					t = "🟨"
					break;
				case 3:
					t = "🟧"
					break;
				default:
					t = "🟥"
			}
			p5.textSize(15)
			p5.textAlign(p5.CENTER, p5.CENTER)
			p5.text(t, hole.x, hole.y)
		}
		if (p5.keyIsPressed && p5.key === "f") {
			p5.fullscreen(!full)
		}
		for (let car of cars) {
			car.show()
		}
	}

	return (
		<Sketch setup={setup} draw={draw} />
	)
}