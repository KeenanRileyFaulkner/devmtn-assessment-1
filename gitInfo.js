/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a version-control software created by Linus Torvalds. It allows you to save your code in a local repository at any time, creating versions of the code that can be branched off of, or built upon.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'Git Hub is an online platform for hosting virtual (remote) repositories. It allows people to work together on coding projects and save progress in the cloud. Widely used by corporations for sofware development, and largely dependent on git.'

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = 'git init initializes (or creates) a local repository on the current computer, in the current working directory (so you should avoid running git init on the entire C:// directory).'

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = 'git clone creates a local copy of a local or remote repository.'

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = 'git status tells you what the current status of your project is within git (i.e. if there are uncommited changes, or changes staged for commit)'

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = 'git add allows you to stage files for commit on the local machine';
let gitAddCode = 'git add .'

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = 'git commit creates a new version of your code on your local machine, which contains all changes that were staged since the last commit.';
let gitCommitCode = 'git commit -am "initial commit"';

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = 'git push allows you to push your last commit(s) to the branch of the remote repo you are currently working off of (or technically any other branch, but you might have to resolve some conflicts)';