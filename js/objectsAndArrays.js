var greetButton = document.getElementById("goButton"),
    displayText = document.getElementById("displayText"),
    personToGreet = "";

var customer1 = {
    firstName: "Jeff",
    lastName: "Ammons"
},
customer2 = {
    firstName: "Sue",
    lastName: "Smith"
};

greetButton.addEventListener("click", function(){

    var peopleToGreet = customer1.firstName + " " + customer1.lastName + "<br>";
    peopleToGreet += customer2.firstName + " " + customer2.lastName + "<br>";

    displayText.innerHTML = peopleToGreet;
});
