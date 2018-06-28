// Memoization
const squareNumber = memoize(x => x * x);

squareNumber(4); // 16
squareNumber(4); // 16, returns cache for input 4
squareNumber(5); // 25
squareNumber(5); // 25, returns cache for input 5

// simple implementation, way more robust exist
const memoize = f => {
	const cache = {};

	return (...args) => {
		const argsStr = JSON.stringify(args);
		cache[argsStr] = cache[argsStr] || f(...args);
		return cache[argsStr];
	}
}

// we can make impure functions pure ones by delaying evaluation
const pureHttpCall = memoize((url, params) => () => $.getJSON(url, params));

// all dependencies are explicit, so easy to reason about it

// impure
const signUp = attrs => {
	const user = saveUser(attrs);
	welcomeUser(user);
}

// pure
const signUp = (db, email, attrs) => () => {
	const user = saveUser(db, attrs);
	welcomeUser(email, user);
}