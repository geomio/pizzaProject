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
// Topping price prototype for total price
Topping.prototype.toppingPrice = function(){
  return this.protein.length * 2 + this.veggie.length;
}

//Prototype to show user their pizza object.
Pizza.prototype.showOrder = function(){
  $(".panel").show();
  $("span#sizeOutput").text(this.size);
  let shownProteinTopping = "Protein:" + " " + this.toppings.protein.join(" , ") + " " + "Veggie:" + " " + this.toppings.veggie.join(" , ")
  $("span#toppingOutput").text(shownProteinTopping);
  $("span#priceOutput").text(this.price);
};

$(document).ready(function() {   
  $("button#showStart").click(function() {
      $("#pizzaInputForm").show();
  });
  $("form#pizzaInputForm").submit(function(event){
    event.preventDefault();
    let proteinArray = [];
    let veggieArray = [];
    $("input:checkbox[name=veg]:checked").each(function(){
  veggieArray.push($(this).val());
});
    $("input:checkbox[name=protein]:checked").each(function(){
  proteinArray.push($(this).val());
});
    let pizzaSizeInput = $("input:radio[name=size]:checked").val();
    let userTopping = new Topping(proteinArray, veggieArray);
    let userPizza = new Pizza(pizzaSizeInput, userTopping, 5);
    userPizza.sizePrice();
    userPizza.price = userPizza.price + userTopping.toppingPrice();
    userPizza.showOrder();
  });
});
