console.log("before");
getUser(1, getRepositories);
console.log("after");

function getUser(id, callback){
	setTimeout(() => {
		console.log("reading user from a database...");
		callback( { id: id, gitHubUsername: "Jim"});
	}, 2000);
}

function getRepositories2(username, callback) {
	setTimeout(() => {
		console.log("reading github...");
		callback( ["repo1", "repo2", "repo3"]);
	}, 2000);
	
}

function getCommits2(repo, callback) {
	setTimeout(() => {
		console.log("reading repo...");
		callback( ["commit1", "commit2", "commit3"]);
	}, 2000);
	
}

function getRepositories(user) {
	console.log("user", user);
	getRepositories2(user.gitHubUsername, getCommits)
}

function getCommits (repos){
		getCommits2(repos[0], displayCommits);
	}

function displayCommits(commits)
{
	console.log(commits);
}