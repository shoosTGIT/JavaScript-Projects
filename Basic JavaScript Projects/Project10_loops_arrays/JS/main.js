function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let text = "Hello World!";
let length = text.length;

document.getElementById("demo").innerHTML = length;

var Instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is" + Cat_Picture[2] + ".";
}

function array_Function() {
    var random_quote = [];
    random_quote[0] = "Miller Mac";
    random_quote[1] = "yeaaaaa Mac";
    random_quote[2] = "Q...";
    random_quote[3] = "Wooooaaaah";
    document.getElementById("array").innerHTML = "Within this field of music, the man is" + random_quote[1] + random_quote[0] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var L = 82;
document.write("<br>" + L);
{
    let L = 33;
    document.write("<br>" + L);
}
document.write("<br>" + L);

document.getElementById("demo").innerHTML = myFunction("John");

function myFunction(name) {
  return "Hello " + name;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let next = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    next += "The number is " + i + "<br>";
}

document.getElementById("break").innerHTML = next;

let lext = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    lext += "The number is " + i + "<br>";
  }
  document.getElementById("lext").innerHTML = text;