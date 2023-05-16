function Ride_Function() {                                                  //defining the function
    var Height, Can_ride;                                                   //setting variables
    Height = document.getElementById("Height").value;                       //setting the element to be used
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   //defining what will be done
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";     //^ cont.
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}