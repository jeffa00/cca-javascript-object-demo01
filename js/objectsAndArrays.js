var greetButton = document.getElementById("goButton"),
    displayText = document.getElementById("displayText"),
    personToGreet = "";

    var customerName = "Jeff";

greetButton.addEventListener("click", function(){
    displayText.innerHTML = customerName;
});
