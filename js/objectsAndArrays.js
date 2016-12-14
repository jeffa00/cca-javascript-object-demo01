var greetButton = document.getElementById("goButton"),
    displayText = document.getElementById("displayText"),
    personToGreet = "",
    customers = [];

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

customers.push(new Customer("Jeff", "Ammons"));
customers.push(new Customer("Sue", "Smith"));
customers.push({ petType: "Rabbit", age: "23", firstName:"Fluffy", lastName: "Bunny", greetFormally: function(){ return "Little bunny foo foo"; }});


greetButton.addEventListener("click", function(){

    var peopleToGreet = "";
    
    for(var i=0; i< customers.length; i++){
        var curCustomer = customers[i];
        peopleToGreet += curCustomer.firstName + " " + curCustomer.lastName + " " + curCustomer.greetFormally() +  "<br>";
    }

    displayText.innerHTML = peopleToGreet;
});
