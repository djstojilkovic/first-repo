"use strict";
(function () {
  function Product(name, price, expirationDate) {
    this.id = Math.floor(Math.random() * 89999) + 10000;
    this.name = name;
    this.price = parseFloat(price.toFixed(2));
    this.expirationDate = expirationDate;
    this.getInfo = function () {
      return (
        this.name.toUpperCase().charAt(0) +
        this.name.toUpperCase().charAt(this.name.length - 1) +
        this.id +
        ", " +
        this.name +
        ", " +
        this.price
      );
    };
  }

  function ShoppingBag() {
    this.listOfProducts = [];
    this.addProduct = function (proizvod) {
      if (proizvod instanceof Product) {
        //dodati expDate uslov
        this.listOfProducts.push(proizvod);
      } else {
        console.log("Add product argument must be instance of Product!");
      }
    };
    this.calcAvg = function () {
      var sum = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        sum += this.listOfProducts[i].price;
      }
      return (sum / this.listOfProducts.length).toFixed(3);
    };
    this.getMostExpensive = function () {
      var max = this.listOfProducts[0].price;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        if (max.price < this.listOfProducts[i].price) {
          max = this.listOfProducts[i];
        }
      }
      return max.getInfo();
    };
  }

  //Adding properties to Product
  var banana = new Product("Banana", 150.31345, "1/12/2025");
  var jogurt = new Product("Milk", 120.3213, "2/6/2026");

  //Adding properties and products to ShoppingBag
  var torba = new ShoppingBag();
  torba.addProduct(banana);
  torba.addProduct(jogurt);
  console.log(banana.getInfo());
  console.log(torba.calcAvg());
})();
