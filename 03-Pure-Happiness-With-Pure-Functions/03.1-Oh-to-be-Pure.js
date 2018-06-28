//  A pure functions is a function that, given the same input,
// will always return the same output and does not have any side effects.

const xs = [1,2,3,4,5];

// pure
xs.slice(0,3); 	// [1,2,3]
xs.slice(0,3); 	// [1,2,3]
xs.slice(0,3); 	// [1,2,3]

// impure
xs.splice(0,3); 	// [1,2,3]
xs.splice(0,3); 	// [4,5]
xs.splice(0,3); 	// []

// splice() mutates data so is not pure

// impure
let minimum = 21;
const checkAge = age => age >= minimum;

// pure
const checkAge = age => {
	const minimum = 21;
	return age >= minimum;
}

// The impure version of the function uses external data "minimum" so
// it might be changed any time. And adds up extra cognitive load by
// introducing an external environment.

// one way to make minimum immutable
const immutableState = Object.freeze({minimum: 21});