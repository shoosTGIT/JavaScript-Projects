document.write(typeof "Word");                  // learning the use of typeof attribute

document.write(typeof 3);

console.log(2+2);                               //doing math within JS

document.write(10==10);

document.write(11==3);

x = 10;
y = 10;
document.write(x===y);                          // learning and testing the triple = symbol

xa = 10;
ya = "10";
document.write(xa===ya);                        // testing it to be false

xb = 10;
yb = "Richard";
document.write(xb===yb);                        //testing it with different types of data

document.write(7 > 2 && 9 > 3);                 // setting both and & or statements to be true

document.write(4 > 10 || 7 > 3);

function Not_Function() {                               // defining function for the !not symbol in html
    document.getElementById("Not").innerHTML =!(20>10);
}