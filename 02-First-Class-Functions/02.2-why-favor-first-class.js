// If we have
httpGet("/post/2", json => renderPost(json));

// and if we want to explicitly pass err along,
// we need to change all httpGet at the codebase.
httpGet("/post/2", (err, json) => renderPost(err, json));

// we can call renderPost from within httpGet with however many arguments it wants
httpGet("/post/2", renderPost);

// generalization of function names

// specific to our current blog
const validArticles = articles =>
	articles.filter(article => article !== null && article !== undefined);

// vastly more relevant for future projects
const compact = xs => xs.filter(x => x !== null && x !== undefined);

// If underlying function uses "this" and we call it first class we need to bind it
const fs = require("fs");

// scary
fs.readFile("freaky_friday.txt", Db.save);

// less so
fs.readFile("freaky_friday.txt", Db.save.bind(Db));