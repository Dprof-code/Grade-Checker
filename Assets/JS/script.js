//This program is used to check grade based on a University system

function checkGrade() {

    var score = prompt("Enter your score: ");

    if (score <= 44) {
        alert("You have a F");
    } else if (score <= 49) {
        alert("You have a D");
    } else if (score <= 59) {
        alert("You have a C");
    } else if (score <= 69) {
        alert("You have a B");
    } else if (score >= 70) {
        alert("You have an A");
    } else {
        alert("Invalid Input");
    }

}