document.write('Hello, World!');        //Displaying a simple string

var A = "This is a string";             //Defining a variable to get used to JS

document.write(A);

var B = "Louise said,\"GET OUTTA HERE!\""; 

window.alert(B);

var C = "It was once a rabbit,"     // Practicing connecting strings together
+ " and now it is a meal.";

document.write(C);

var D = "Spider-" + "Man";
document.write(D);

var E ="The Malcoms", F ="Robert", G ="Franklin";
document.write(G);

document.write(3+3);

function My_First_Function() {                        //Defining a function and naming it
    var str = "This is the button text!";             //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str;     //Putting the value of the variable into the HTML elementFromPoint with the Button Text ID
}

var Sent1 ="This is the beginning of the string";

var Sent2 =" and this is the end of the string";

document.write(Sent1 + Sent2);