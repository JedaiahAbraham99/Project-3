var deliveryFee, totalOrderFee, totalToppingsCost, toppings, costOfToppings;
var pizzaSize,quantity,clientName,clientTel;
const deliveryFee = 15.00;


var toppings=[cheese,mushrooms+pineapples+pepperoni+grilledChicken];
toppings.sort();

var button = document.getElementById("submit");
        
        button.addEventListener( "click" , function(){

        
        document.getElementsByClassName("Pizza-sizes").innerHTML = getPizzaSize();
        //Functions to call data from form
        function getClientName(){
            clientName = document.getElementById("client_Name");
            return clientName;
        }
        function getClientTel(){
            clientTel = document.getElementById("client_phoneNumber");
            return clientTel;
        }
        function getNumOfPizzas(){
            quantity = document.getElementsByClassName("totalPizzasOrdered");
            return quantity;
        }
        function getToppings(){
            const costOfToppings = 5.00;
            var totalToppingsCost = document.getElementsByClassName('form-check');
            var totalToppingsCost = totalToppingsCost*costOfToppings;
        }
        function getPizzaSize(){
            var pizzaSize=[smallPizza,mediumPizza,largePizza];
            var smallPizza = 9.99;
            var mediumPizza = 15.99;
            var largePizza = 21.99;
    
            pizzaSize = document.getElementsByClassName("Pizza-sizes");
            return pizzaSize;   
        }

        //Calculations
        
        totalOrderFee = totalToppingsCost+ pizzaSize+deliveryFee;   
        return quantity;
        return costOfToppings;
        return totalOrderFee;

        
        
        }
        );