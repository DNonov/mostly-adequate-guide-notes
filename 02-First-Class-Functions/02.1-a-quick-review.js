const hi = name => `Hi ${name}`;
const greetings = name => hi(name);

// Since javascript has callable functions
hi; // name => hi(name)
hi("jonas") // "Hi jonas"

// There is no point to return function with same argument so ...
const greetings = hi;
greetings("times"); // "Hi times"

// More on the same issue

// ignorant
const getServerStuff = callback => ajaxCall(json => callback(json));

// enlightened
const getServerStuff = ajaxCall;

// Step by step explanation

ajaxCall(json => callback(json)); // this line

ajaxCall(callback); // is the same as this line

const getServerStuff = callback => ajaxCall(callback); // so refactor

const getServerStuff = ajaxCall; // ..which is equivalent to this

// another example

const BlogController = {
	index(posts) {return Views.index(posts);},
	show(posts) {return Views.show(posts);},
	create(attrs) {return DB.create(attrs);},
	update(posts, attrs) {return DB.update(posts, attrs);},
	destroy(posts) {return DB.destroy(posts);}
}

// This is 99% fluff. So refactor
const BlogController = {
	index: Views.index,
	show: Views.show,
	create: DB.create,
	update: DB.update,
	destroy: DB.destroy
}