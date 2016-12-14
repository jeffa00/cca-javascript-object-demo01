var greetButton = document.getElementById("goButton"),
    displayText = document.getElementById("displayText"),
    personToGreet = "";

var customer1FirstName = "Jeff",
    customer1LastName = "Ammons",
    customer2FirstName = "Sue",
    customer2LastName = "Smith";

greetButton.addEventListener("click", function(){

    var peopleToGreet = customer1FirstName + " " + customer1LastName + "<br>";
    peopleToGreet += customer2FirstName + " " + customer2LastName + "<br>";

    displayText.innerHTML = peopleToGreet;
});
