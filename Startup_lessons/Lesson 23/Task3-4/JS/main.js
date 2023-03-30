
function computer(brand, system, cost){

    this.brand = brand;
    this.system = system;
    this.cost = cost;
    this[Symbol.toPrimitive] = function (hint) {
          console.log(hint); 
          switch (hint) {
            case "string":
              return this.brand;
            case "number":
              return this.cost;
            case "default":
              return this.brand + " " + this.system + " " + this.cost + " // ";
          }
        };
  }
  
  let dell = new computer("Dell", "windows", "800");
  let apple = new computer("Apple", "MAC OS", "1700");
  console.log(dell);
  console.log(apple);
  console.log(String(dell));
  console.log(+apple);
  console.log(dell+apple);