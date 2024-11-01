"use strict";
function Product(name, price, expirationDate) {
  this.id = Math.floor(Math.random() * 90000) + 10000;
  this.name = name;
  this.price = Number.parseFloat(price).toFixed(2);
  this.expirationDate = expirationDate;
  this.getInfo = function () {
    return (
      name.toUpperCase().charAt(0) +
      name.toUpperCase().charAt(1) +
      this.id +
      ", " +
      name +
      ", " +
      this.price
    );
  };
}

function ShoppingBag() {
  this.listOfProducts = [];
  this.addProduct = function (product) {
    this.listOfProducts.push(product);
  };
  this.getInfo = function () {
    var productInfo = "";
    this.listOfProducts.forEach((product) => {
      productInfo += "\n" + product.getInfo();
    });
    return productInfo;
  };
}

//Adding properties to Product
var bananas = new Product("Bananas", 150.31345);
var milk = new Product("Milk", 120.3213);

//Adding properties and products to ShoppingBag
var shoppingBag1 = new ShoppingBag();
shoppingBag1.addProduct(bananas);
shoppingBag1.addProduct(milk);

//Main execution IIFE function
(function mainExecution(inputArray) {
  inputArray.forEach((element) => {
    console.log(element.getInfo());
  });
})([shoppingBag1]);
