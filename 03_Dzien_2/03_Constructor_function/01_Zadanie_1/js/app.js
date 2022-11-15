function Basket(){
    this.products = [];
    this.sum = 0;
    this.addProduct = function (product, price){this.products.push({product: product, price: price}); this.sum += price;};
    this.showBasket = function (){console.log(this.products); console.log("total price: " + this.sum);};
}

const aliceBasket = new Basket();
aliceBasket.addProduct("rice", 10);
aliceBasket.showBasket();
aliceBasket.addProduct("arbuz", 40);
aliceBasket.addProduct("pomidor", 10);
aliceBasket.showBasket();


const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();