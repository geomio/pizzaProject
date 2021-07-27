//Pizza constructor
function Pizza(size, toppings, price) {
  this.size = size
  this.toppings = toppings
  this.price = price
}
//Prototype for pizza to find size price
Pizza.prototype.sizePrice = function(){
  if (this.size === 'small') {
    this.price += 3;
  } else if(this.size === 'medium') {
    this.price += 6;
  }else if (this.size === 'large') {
    this.price += 9;
  }
}

// Topping Object constructor
function Topping(protein, veggie) {
  this.protein = protein;
  this.veggie = veggie;
}
// Topping price prototype for price
Topping.prototype.toppingPrice = function(){
  return this.protein.length * 2 + this.veggie.length;
}
//user object and topping below
let userTopping = new Topping(['ham', 'chicken'], ['peppers', 'olives']);
let userPizza = new Pizza("small", userTopping, 5);
userPizza.sizePrice();
userPizza.price = userPizza.price + userTopping.toppingPrice();

let proteinArray = [];
let veggieArray = []

// $("")

// $("input:checkbox[name=protien]:checked").each(function(){
//   var checked = $("this").val();
  
//   if ($"(this").is(':checked') {
//     proteinArray.push(checked);
//   }
// });

$("input:checkbox[name=veg]:checked").each(function(){
  veggieArray.push($(this).val());
});

$(document).ready(function() {   
  $("button#showStart").click(function(event) {
      event.preventDefault();
      $("#pizzaInputForm").show();
      
  
  });
});