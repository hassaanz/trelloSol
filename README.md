# Trello Node.JS Developer Job Solution
My solution to [Trello Node.JS Developer](https://trello.com/jobs/developer) Job application.

After checking the problem statement, I knew that I was supposed to crack the hash.
I knew that the simplest way would be to use the Brute Force technique.
I have worked in Network Security research and I figured out that the hash function is not a very complicated one so I knew that I could find a more efficient solution by checking out the output of hash values in series of candidates.
After checking out some output from my brute force code, I figured out the efficient algorithm to solve the problem. I coded the algorithm and the result was found in a very short time as compared to the bruteforce code.

I have not type checked and considered error values as this is just a sample code for a problem solution and would probably never get pushed to production.

The functions in my code are explained as follows:
genHash: This function takes a string value and returns an integer value. This is the hash algorithm explained on the page.
first: This function Generates the first candidate for Brute Force technique.
next: This function takes a problem value and a candidate and generated a next candidate for the problem.
output: This function is used to output the result to the console.
solveForProblem: This function takes a problem value as a parameter and call the abome mentioned helper functions and solve the hash using brute force. As the number of characters and alphabets is very large, the brute force solution takes a lot of time to process.
printAllValues: This function iterates through all the possible string values and prints out their hashes on console. This function was used to identify the "sequence" in the hash algorithm.
searchHash: This function takes a hash values and search for the possible string against it. This is the efficient solution for the problem.

The code contains a brute force algorithm implementation in node.js.

## Executing:
I've used Node.js to test out the functions and check the results. Node command line can be used to execute the file and see the results.

Didn't get any positive reply from the company :(
