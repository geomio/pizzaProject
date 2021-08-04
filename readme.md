## 2.1.5.1 Javascript Object Project.

## Pizza Ticket Project.

# By Geoff Millner

## Description

A basic html page linked to bootstrap and jquery that will let user fill out form fields to build a pizza ticket that will display the size, toppings, and price of the pizza
  
# Setup/Installation Requirements

1. copy link https://github.com/geomio/pizzaProject.git
2. in terminal of choice navigate to folder of choice for cloning
3. type or paste this into the terminal: git clone https://github.com/geomio/pizzaProject.git
4. navigate to clone destination folder
5. open index.html with web browser

## Specifications
Description: Pizza()  
Test: "It should make new object called pizza"  
Code: const userPizza = new Pizza('small', ["pepperoni"], ["olives"])  
Expected Output: Pizza {size: "small", toppings: Array(1), price: 5}  

Description: Pizza.prototype.sizePrice()  
Test: "should change total price based on size"  
Code:  
const userPizza = new Pizza('small', ["pepperoni"], ["olives"])  
userPizza.sizePrice()  
Expected Output: userPizza.price = 8;  

Description: Topping()  
Test: "it should make new topping object"  
Code:  
const proteinArray = ["pepperoni"]  
const veggieArray = ["olive"]  
userTopping = new Topping(proteinArray, veggieArray)  
Expected Output: Topping {protein: Array(1), veggie: Array(1)}  

Description: Topping.prototype.toppingPrice()  
Test: "Will determine topping price"  
Code:  
userTopping = new Topping(["pepperoni"], ["olives"])  
userTopping.toppingPrice();  
Expected Output: 3;  

Description: Pizza.prototype.showOrder();  
Test: "This show html area and text the size, topping, and price to html from pizza object"  
Code:  
userTopping = new Topping(["pepperoni"], ["olives"])  
const userPizza = new Pizza(small, userTopping,)  
userPizza.showOrder()  
Expected Output: Should return undefined but html should show small, the toppings pepperoni, and  olives ,and price of 5  
<!-- This is because math is not fully handled in total in this step it is Expected. -->

# Known Bugs

* This has only been tested in google chrome.
* Display may look weird on small screens.
* The mobile layout may be rather condensed.


# contact details

  

*Check my github.

  

## Technologies Used

  

 Html5, bootstrap, Css, Javascript and Jquery made in Visual Studio Code. 

  

# License

  
cc0 free to use. 2021 by Geoff Millner 
