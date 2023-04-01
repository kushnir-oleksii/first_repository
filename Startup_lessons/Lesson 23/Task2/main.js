let salaries = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
      alert("We must pay salary on Tuesday!");
    },
    total() {
      for (let key in this) {
       
        console.log(+this[key]);
        
      }
      let sum = this.fronted + this.backend + this.designer;
      console.log(sum);
    },
  };
  salaries.fullstak = 22000;
  console.log(salaries);
  salaries.total();
  