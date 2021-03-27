const string = "Hello"

function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
    let string2 = string.toUpperCase()
    let string3 = string.toLowerCase()

    if(string === string.toUpperCase(string2)){
        return("YES INDEED!");
    } else if(string === string.toLowerCase(string3)){
        return("I can\'t hear you!");
    } else return("I love you, too.");
}

sayHiToGrandma();