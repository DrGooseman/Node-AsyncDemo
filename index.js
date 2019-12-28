console.log("before");
getUser(1)
	.then(user => getRepositories(user.gitHubUsername))
	.then(repos => getCommits(repos[0]))
	.then(commits => console.log("Commits",commits))
	.catch(err => console.log("Error",err.message));
console.log("after");

function getUser(id){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		console.log("reading user from a database...");
		resolve( { id: id, gitHubUsername: "Jim"});
	}, 2000);
	});
}

function getRepositories(username) {
	return new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("reading github...");
		resolve( ["repo1", "repo2", "repo3"]);
	}, 2000);
	});
}

function getCommits(repo) {
	return new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("reading repo...");
		resolve( ["commit1", "commit2", "commit3"]);
	}, 2000);
	});
	
}

