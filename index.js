console.log("before");
const user = getUser(1, function(user) {
	console.log("user", user);
	getRepositories(user.gitHubUsername, function(repos){
		console.log("repos", repos);
	})
});
console.log("after");

function getUser(id, callback){
	setTimeout(() => {
		console.log("reading user from a database...");
		callback( { id: id, gitHubUsername: "Jim"});
	}, 2000);
}

function getRepositories(username, callback) {
	setTimeout(() => {
		console.log("reading github...");
		callback( ["repo1", "repo2", "repo3"]);
	}, 2000);
	
}