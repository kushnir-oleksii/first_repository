
let mixin = {
    Vat() {
      return (this.price + this.price*0.2);
    },
    exciseDuty() {
        return ((this.price +this.price*0.3)+10);
    },
    singleTax(){
        return (this.price +1)
    }
 
  };
class Cola {
  constructor(brand, price) {
    this.brand= brand; 
    this.price = price;
       
  }
}
Object.assign(Cola.prototype, mixin)
Cola.prototype.newVat = function (){
    return this.price
}
class Whiskey {
  constructor(brand, price) {
    this.price = price;
    this.brand = brand;
  }
}
Object.assign(Whiskey.prototype, mixin)
Cola.prototype.neWexciseDuty = function (){
    return this.price
}

class Ice {
    constructor(price) {
    this.price = price;      
    }
}
Object.assign(Ice.prototype, mixin)
Cola.prototype.neWsingleTax= function (){
    return this.price
}



let cocaCola = new Cola ('Coca-Cola', 10)
let johnwalker = new Whiskey ('john walker', 100)
let ice = new Ice (2)
console.log(cocaCola.Vat());
console.log(johnwalker.exciseDuty())
console.log(ice.singleTax())