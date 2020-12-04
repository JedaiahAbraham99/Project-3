var deliveryFee, totalOrderFee, totalToppingsCost, toppings, costOfToppings;
var pizzaSize,quantity,clientName,clientTel;
var costOfToppings = 5.00;

var toppings=[cheese,mushrooms+pineapples+pepperoni+grilledChicken+tuna];
toppings.sort();

var pizzaSize=[smallPizza,mediumPizza,largePizza];
var smallPizza = 9.99;
var mediumPizza = 15.99;
var largePizza = 21.99;

var button = document.getElementById("submit");
        var result = document.getElementById("uk-total-price");
        
        button.addEventListener( "click" , function(){

        
        document.getElementsByClassName("Pizza-sizes").innerHTML = getPizzaSize();
        //Functions
        function getClientName(){
            clientName = document.getElementById("client_Name");
            return clientName;
        }
        function getClientTel(){
            clientTel = document.getElementById("client_phoneNumber");
            return clientTel;
        }
        function getNumOfPizzas(){
            quantity = document.getElementsByClassName("totalPizzasOrdered")
            return quantity;
        }
        function getToppings()
        //Calculations

        var totalToppingsCost = document.getElementsByClassName('form-check').innerHTML=getToppings;
        var totalToppingsCost = totalToppingsCost*costOfToppings;
        var totalOrderFee = totalToppingsCost+ pizzaSize;   
       return quantity;
        return totalOrderFee;
        
    
        
        }
        );