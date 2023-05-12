function my_Dictionary() {      // defining my function
    var Animal= {               //setting up my dictionary
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;        //deleting animal sound to bring up undefined 
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}