// Login Systems (3 Attempts) --

function login(pass) {
    let password = "prince@123";

    if(pass == password) return true;
    return false;
}

let attempt = 0;

function userInput(password) {
    if(attempt == 3){
        console.log("System Locked!");
        console.log("Too many attempts!!!");
        return;
    }
    if(login(password)){
        console.log("Access Granted!");
        console.log("Login Successful!");
    }else {
        attempt++;
        console.log(`Attempt ${attempt}: Wrong Password!`);
        console.log("Try Again...");
    }
}

setTimeout(() => userInput("hello@123"), (attempt+1)*1000);

setTimeout(() => userInput("hello@123"), (attempt+3)*1000);

setTimeout(() => userInput("prince@123"), (attempt+5)*1000);
