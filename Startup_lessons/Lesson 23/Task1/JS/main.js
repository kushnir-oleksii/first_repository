let car = {
    mersedes: {
       model: 'amg',
       year: 18,
       color: "red",
     },
     ferrari: {
      model: 'atr',
      year: 10,
       color: 'white',
     },
     signal: function(){
      alert("fa! fa!");
     }
   };
  car.mersedes.color = 'yellow';
  car.ferrari.type = "benzin";
  console.log(car);
  car.signal();

  // // lecturer remarks
  // let car = {
  //   model: 'BMW',
  //   year: 2021,
  //   color: 'black',
  //   signal(){
  //   alert('fa! fa!');
  //   }
  //   }
  //   car.signal();