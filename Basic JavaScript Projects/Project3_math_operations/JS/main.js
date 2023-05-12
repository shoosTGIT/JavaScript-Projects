function addition_Function() {                  //defining my addition function
    var addition = 2 + 2;                       //setting the variable 
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition;       //defining what it will do once the P element is clicked
}

function subtraction_Function() {               //defining my subtraction function
    var Subtraction = 5 - 2;                    // setting the variable
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;       ////defining what it will do once the P element is clicked
}

function multiplication() {                     //defining my multiplication function
    var simple_math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 =" + simple_math;
}

function division() {                           //defining my division function
    var simple_math = 48 / 6;
    document.getElementById("Math").innerHTML = " 48 / 6 =" + simple_math;
}

function more_Math() {                          // defining my order of operations function
    var simple_Math = (1 + 2) * 10 / 2 -5;      // set the calculations
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;       //setting the equation once the element is clicked
}

function modulus_Operator() {                   //labeling my function
    var simple_Math = 25 % 6;                   //setting up the variable
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;      //setting what is to be displayed once the element is clicked
}


function negation_Operator() {              //labeling my function
    var x = 10;                             // setting up the variable
    document.getElementById("Math").innerHTML = -x;             //defining what goes into the element once it is clicked
}

var X = 5;
X++;
document.write(X);
                                //setting up both positive and negative actions
var Y = 5.25;
Y--;
document.write(Y);

window.alert(Math.random() * 100);

function Euler() {                  //defining a function to show the Math.Object side of JS
    var a = Math.E;                 //setting up variable
    document.getElementById("Math").innerHTML = a;      //defining what will be displayed once clicked
}

  
  random(1, 10);