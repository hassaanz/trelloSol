var letters = "acdegilmnoprstuw";
var totalChars = 9;
var first, next, valid, output, genHash, solveForProblem, output, printAllValues, searchHash;

genHash = function(str) {
	var h = 7;
	for (var i = 0; i < str.length; i++) {
		h = (h* 37 + letters.indexOf(str[i]));
	};
	return h;
}

first = function() {
	var firstData = [];
	for (var i = 0; i < totalChars; i++) {
		firstData[firstData.length] =  letters[0];
	}
	console.log("First Data: " + firstData);
	return (firstData.join(""));
}

next = function(Problem, candidate) {
	var nextCand = candidate;
	nextCand = nextCand.split("");
	// console.log(nextCand.length)
	var lettersArr = letters.split("");
	var lastChar = lettersArr[letters.length -1];
	var generatedNext = false;
	for (var i = nextCand.length - 1; i >= 0; i--) {
		var curChar = nextCand[i];
		// console.log("Current Character = " + curChar)
		var nextCharPos = letters.indexOf(curChar) + 1;
		// console.log("Next Char Pos = " + nextCharPos);
		if (nextCharPos == letters.length) {
			// console.log("Moving to next letter in word.");
			nextCharPos = 0;
			nextCand[i] = letters[0];
		} else {
			generatedNext = true;
			// console.log("Subs with: " + lettersArr[nextCharPos]);
			nextCand[i] = lettersArr[nextCharPos];
			break;
		}
		// next[i] = letters[0];
	}
	if (generatedNext == true) {
		// console.log("Next: " + nextCand);
		return nextCand.join("");
	} else {
		return null;
	}
}

valid = function(Problem, candidate) {
	return (genHash(candidate) == Problem);
}

output = function(Problem, candidate) {
	console.log("Problem: " + Problem + ". Found Solution: " + candidate);
	return null;
}

// Bruteforce
solveForProblem = function(P) {
	var c = first();
	do {
		c = next(P, c);
		// console.log(c);
		if (valid(P, c)) {
			output(P, c);
			break;
		}
	} while ( c != null);
}

// See hash output to figure out sequence
var printAllValues = function() {
	var data = first();
	console.log(data);
	data = next("11", data);
	while(data != null) {
		var hash = genHash(data);
		console.log("Data: %s Hash %s", data, hash);
		data = next("11", data);
	}
}

// Try Bruteforce
// solveForProblem(956446786872726);

// Searching
var searchHash = function(hash) {
	var initial = "wwwwwwwww";
	var lettersArr = letters.split("");
	if (hash > genHash(initial)) {
		console.log("provided hash out of range.");
		return null;
	}
	var solution = initial.split("");
	// console.log("Current Solution: " + solution.join(""));
	for (var i = 0; i < solution.length; i++) {
		for (var j = letters.indexOf(solution[i]) - 1; j >= 0; j--) {
			var newSol = solution;
			newSol[i] = letters[j];
			// console.log("New Solution: " + newSol.join(""));
			if (genHash(newSol.join("")) < hash) {
				// console.log("hash underflow. Jumping to previos solution. Moving to next char");
				newSol[i] = letters[j + 1];
				solution = newSol;
				// console.log("Current Solution: " + solution.join(""));
				break;
			}
		}
		if (genHash(solution) == hash) {
			return(solution.join(""));
		}
	}
	return(null)
}

var answer = searchHash(956446786872726);
if (answer != null) {
	console.log("Found Solution: " + answer);
} else {
	console.log("Hash not found in character range.");
}
