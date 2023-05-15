function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function1() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

function my_Function2() {
    document.getElementById("Test").innerHTML = isNaN('007');
}

document.write(2E310);

document.write(-2E310);

