let salaries = {
    frontend: 2000, 
    backend: 1500,
    design: 1000,
    set addSalaryArray (arr){
        for (let i = 0; i<arr.length; i++) {
            this[arr[i].split(':')[0]] = +arr[i].split(':')[1];
        }
    }
}
Object.defineProperty(salaries, 'sum', {
    get (){
        let sum = 0;
        for(salary in this){
            sum += this[salary];
        }
        console.log(sum);
    },
    enumerable: false
})
salaries.addSalaryArray = [ 'frontend: 2000', 'backend: 1500', 'design: 1000', 'fullstack: 3000']
console.log(salaries)