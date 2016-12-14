var greetButton = document.getElementById("goButton"),
    displayText = document.getElementById("displayText"),
    personToGreet = "";

var Customer = function Customer(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = "";
    this.address1 = "";
    this.address2 = "";
    this.city = "";
    this.state = "";
    this.zip = "";
    this.greetFormally = function greetFormally(){
        return "Greetings, Mr. or Ms. " + this.lastName;
    }
};

var customer1 = new Customer("Jeff", "Ammons"),
    customer2 = new Customer("Sue", "Smith");

    customer1.email = "jeffa00@gmail.com";

greetButton.addEventListener("click", function(){

    var peopleToGreet = customer1.firstName + " " + customer1.lastName + " " + customer1.greetFormally() + "<br>";
    peopleToGreet += customer2.firstName + " " + customer2.lastName + " " + customer2.greetFormally() +  "<br>";

    displayText.innerHTML = peopleToGreet;
});
