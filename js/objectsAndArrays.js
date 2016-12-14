var greetButton = document.getElementById("goButton"),
    displayText = document.getElementById("displayText"),
    personToGreet = "",
    customers = [],
    newCustomerFirstName = document.getElementById("new-customer-first-name"),
    newCustomerLastName = document.getElementById("new-customer-last-name"),
    addCustomerButton = document.getElementById("add-new-customer");
    

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

var greetCustomers = function greetCustomers(){
    var peopleToGreet = "";
    
    for(var i=0; i< customers.length; i++){
        var curCustomer = customers[i];
        peopleToGreet += curCustomer.firstName + " " + curCustomer.lastName + " " + curCustomer.greetFormally() +  "<br>";
    }

    displayText.innerHTML = peopleToGreet;
}

greetButton.addEventListener("click", function(){
    greetCustomers();
});

addCustomerButton.addEventListener("click", function(){
    var newCustomerFName = newCustomerFirstName.value,
        newCustomerLName = newCustomerLastName.value;

        customers.push(new Customer(newCustomerFName, newCustomerLName));

    greetCustomers();
});