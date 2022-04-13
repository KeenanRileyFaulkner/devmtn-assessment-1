const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let welcome = "Welcome to the password validation tool!";

for(let i = 0; i < welcome.length + 4; ++i) {
    process.stdout.write("*");
}
process.stdout.write("\n");
process.stdout.write("*");
for(let i = 0; i < welcome.length + 2; ++i) {
    process.stdout.write(" ");
} 
process.stdout.write("*\n");
process.stdout.write("* " + welcome + " *\n");
process.stdout.write("*");
for(let i = 0; i < welcome.length + 2; ++i) {
    process.stdout.write(" ");
}
process.stdout.write("*\n");
for(let i = 0; i < welcome.length + 4; ++i) {
    process.stdout.write("*");
}
process.stdout.write("\n\n");

reader.question("Please enter a password: ", function (input) {
    let givenPassword = input;
    if(givenPassword.length < 10) {
        let tooShort = "Sorry, please enter a password with at least 10 characters.";

        for(let i = 0; i < tooShort.length + 4; ++i) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
        process.stdout.write("*");
        for(let i = 0; i < tooShort.length + 2; ++i) {
            process.stdout.write(" ");
        } 
        process.stdout.write("*\n");
        process.stdout.write("* " + tooShort + " *\n");
        process.stdout.write("*");
        for(let i = 0; i < tooShort.length + 2; ++i) {
            process.stdout.write(" ");
        }
        process.stdout.write("*\n");
        for(let i = 0; i < tooShort.length + 4; ++i) {
            process.stdout.write("*");
        }
        process.stdout.write("\n\n");
    } else {
        let longEnough = "Your password has an acceptable length.";

        for(let i = 0; i < longEnough.length + 4; ++i) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
        process.stdout.write("*");
        for(let i = 0; i < longEnough.length + 2; ++i) {
            process.stdout.write(" ");
        } 
        process.stdout.write("*\n");
        process.stdout.write("* " + longEnough + " *\n");
        process.stdout.write("*");
        for(let i = 0; i < longEnough.length + 2; ++i) {
            process.stdout.write(" ");
        }
        process.stdout.write("*\n");
        for(let i = 0; i < longEnough.length + 4; ++i) {
            process.stdout.write("*");
        }
        process.stdout.write("\n\n");
    }

    let containsUpper = false;
    for(let i = 0; i < givenPassword.length; ++i) {
        if((/^[a-zA-Z]+$/.test(givenPassword[i]))) {
            if(givenPassword[i].toUpperCase() === givenPassword[i]) {
                containsUpper = true;
                break;
            }
        }
    }

    if(!containsUpper) {
        console.log("Your password does not have an uppercase letter. Try making it stronger.");
    }

    let containsNonAlpha = false;
    for(let i = 0; i < givenPassword.length; ++i) {
        if(!(/^[a-zA-Z]+$/.test(givenPassword[i]))) {
            containsNonAlpha = true;
            break;
        }
    }

    if(!containsNonAlpha) {
        console.log("Your password does not contain non-alpha characters. Try again.");
    }

    let containsDate = false;
    for(let i = 0; i < givenPassword.length; ++i) {
        if(givenPassword[i] === "/") {
            if(i + 2 < givenPassword.length && givenPassword[i + 2] === "/") {
                containsDate = true;
                break;
            }
        }
    }

    if(containsDate) {
        console.log("WARNING: Your password may contain a date. Those don't usually make the best passwords. Try something else.");
    }

    reader.close();
});