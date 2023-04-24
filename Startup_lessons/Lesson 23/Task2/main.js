let salaries = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
    alert("We must pay salary on Tuesday!");
    },

  
    total() {
      let sum = 0;
      for(let key in salaries) {
          if (typeof salaries[key] === "number")
              sum += salaries[key];          
      }
      return console.log(sum);
      
    }
  }
    
  
  salaries.fullstak = 22000;
  salaries.devop = 30000;
  salaries.fullstakHead = "% of deal";
  console.log(salaries);
  salaries.total();
  
  
  // lecturer remarks
  // let salaries = {
  //   fronted: 12000,
  //   backend: 10000,
  //   designer: 8000,
  //   dayPay() {
  //   alert('We must pay salary on Tuesday!');
  //   },
  //   total() {
  //   let sum = 0;
  //   for( let key in this){
  //   if(typeof this[key] === 'number'){
  //   sum += this[key];
  //   }
  //   }
  //   console.log(sum);
  //   }
  //   }
  //   salaries.total();// 30000
  //   salaries.manager = 5000;
  //   salaries.total();//35000

  //       function sumSalary(salaries) {
  //         let sum = 0;
  //             for(let key in salaries) {
  //                 if (typeof salaries[key] === "number" && !isNaN(salaries[key]) )
  //                     sum += salaries[key];          
  //             }
  //             return sum;
  //           }
             
      
  
  // salaries.fullstak = 22000;
  // console.log(sumSalary(salaries));
  // salaries.total(salaries);
  
// function sumSalary(salaries) {
//     let sum = 0;
//     for(let key in salaries) {
//         if (typeof salaries[key] === "number" && !isNaN(salaries[key]) && salaries[key] != Infinity && salaries[key] != -Infinity)
//             sum += salaries[key];          
//     }
//     return sum;
//   }
//   salaries.fullstak = 22000;

//   console.log(sumSalary(salaries));
  //   total() {
  //     for (let key in this) {
  //       if (!(+this[key]))
  //       return (this[key] = 0)
       
  //       console.log(+this[key]);
        
  //     }
  //     let sum = +this[key] + +this[key];
  //     console.log(sum);
  //   },
  // };
  // salaries.fullstak = 22000;
  // console.log(salaries);
  // salaries.total();