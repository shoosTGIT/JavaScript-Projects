var X = 10;                                     //setting up variables and global variables
function Add_numbers_1() {                      // defining a function
    document.write(20 + X + "<br>");            // setting the action
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();                                //setting both global variables to display
Add_numbers_2();

function get_Date() {                           // defining function to get time element from computer
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

if (1 < 2) {                                    // defining an if statement to test it's output.
    document.write("That left numba is a small numba")
}

function Age_Function() {                       // defining another function to determine if you are old enough to vote
    Age = document.getElementById("Age").value;
    if (Age>= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {                          // defining the second time function to determing what part of the day the user is currently in.
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}