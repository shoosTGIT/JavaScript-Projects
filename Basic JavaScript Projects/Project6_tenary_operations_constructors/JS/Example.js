function count_Function() {                                     //defining my first function
    document.getElementById("Counting").innerHTML = Count();    //setting the element to be used
    function Count() {                                          //starting my nested function
        var Starting_point = 9;                                 //setting the starting point
        function Plus_one() {Starting_point += 1};              //making the formula for the function to make.
        Plus_one();                                             
        return Starting_point;
    }
}
