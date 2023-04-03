let a = prompt('Enter number a');
let b = prompt('Enter number b');
function maxNumber(a, b){
    if (+a > +b){
        return `${a}`;
    } else if( +b > +a){
        return `${b}`;
    }
    else if( +b === +a){
        return `a=b`;
    }
}

alert(maxNumber(a, b));