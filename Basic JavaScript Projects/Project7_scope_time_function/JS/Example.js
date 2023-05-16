function get_Date() {
    if (new Date().getHours() < 6) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}