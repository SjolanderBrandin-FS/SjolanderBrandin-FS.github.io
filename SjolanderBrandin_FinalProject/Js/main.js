//Add button to webpage that initiates watercraft trivia application.
//When button is pushed, pull random watercraft question from txt file and present to user.
console.log('----------------------Trivia Result-------------------------')
let mybtn = document.getElementById("myButton").onclick = displayQuestion;
let trivQ = "Step Brothers, is the origin of the song (Boats and Hoes)?";

function displayQuestion(){
    document.getElementById("userQuestion").innerHTML = trivQ;
}

// request true or false answer

let mybtn2 = document.getElementById("button2").onclick = application;
let userA = document.getElementById("input1").value;
function application(){

//validate response

    if(userA.toUpperCase() === TRUE){
        document.getElementById("result").innerHTML = "Correct";
    }else if(userA.toUpperCase() === FALSE){
        document.getElementById("result").innerHTML = "Incorrect";
    }
}

//advise is correct or incorrect
