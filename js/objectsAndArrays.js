var greetButton = document.getElementById("goButton"),
    displayText = document.getElementById("displayText"),
    personToGreet = "";

    //var customerName = "Jeff";

    var customerFirstName = "Jeff",
        customerLastName = "Ammons";

greetButton.addEventListener("click", function(){
    displayText.innerHTML = customerFirstName + " " + customerLastName;
});
