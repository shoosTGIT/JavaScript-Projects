function My_First_Function() {                  //defining my function
    var str = "This is the button text!";       //setting the equation up
    document.getElementByID("Button_Text").innerHTML = str;     //allowing the string to react to the button press
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementByID("Concatenate").innerHTML = sentence;
}