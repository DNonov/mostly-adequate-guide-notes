// OOP approach
// - Hard to reason about the code.
// - Difficult to keep track of the mutating internal state.
class Flock {
	constructor(n) {
		this.seagulls = n;
	}

	conjoin(other) {
		this.seagulls += other.seagulls;
		return this;
	}

	breed(other) {
		this.seagulls = this.seagulls * other.seagulls;
		return this;
	}
}

const flockA = new Flock(4);
const flockB = new Flock(2);
const flockC = new Flock(0);

const result = flockA
	.conjoin(flockC)
	.breed(flockB)
	.conjoin(flockA.breed(flockB))
	.seagulls;
// 32 - which is wrong answer

// functional approach
const conjoin = (flockX, flockY) => flockX + flockY;
const breed = (flockX, flockY) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;

const result =
	conjoin(breed(flockB, conjoin(flockA, flockC)), breed(flockA, flockB));
// 16 - right answer