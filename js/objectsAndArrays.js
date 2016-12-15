var displayText = document.getElementById("displayText"),
    personToGreet = "",
    customers = [],
    newCustomerFirstName = document.getElementById("new-customer-first-name"),
    newCustomerLastName = document.getElementById("new-customer-last-name"),
    addCustomerButton = document.getElementById("add-new-customer"),
    maxId = 0;
    

var Customer = function Customer(firstName, lastName){
    this.id = maxId++;
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

var greetCustomers = function greetCustomers(){
    var peopleToGreet = "";
    
    for(var i=0; i< customers.length; i++){
        var curCustomer = customers[i];
        peopleToGreet += "ID: " + curCustomer.id + " " + curCustomer.firstName + " " + curCustomer.lastName + " " + curCustomer.greetFormally() +  '<button id="' + curCustomer.id + '" class="delete-btn">Delete</button><br>';
    }

    displayText.innerHTML = peopleToGreet;
    newCustomerFirstName.value = "";
    newCustomerLastName.value = "";

    // Note: This is an easy way to do this with the bits we've learned so far.
    //       There is a better way! I'll do that next.
    var customerButtons = document.getElementsByClassName("delete-btn");

    for(var i=0; i < customerButtons.length; i++){
        var curButton = customerButtons[i];

        curButton.addEventListener("click", function(e){
            var id = e.currentTarget.id;

            var pos = customers.findIndex(function(element){
                return element.id == id;
            });

            customers.splice(pos,1);
            greetCustomers();
        });
    }
}

addCustomerButton.addEventListener("click", function(){
    var newCustomerFName = newCustomerFirstName.value,
        newCustomerLName = newCustomerLastName.value;

        customers.push(new Customer(newCustomerFName, newCustomerLName));

    greetCustomers();
});





