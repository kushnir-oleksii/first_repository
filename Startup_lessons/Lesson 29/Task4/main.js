/*function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');//Forgot to pass the second parameter
function showMovie (user){
    try{
        if (user.age == undefined){
            throw new SyntaxError('Age not determined');
        }
        if(user.age >= 18){//undefined
            return 'You can watch this movie';
        } else {
            return 'Sorry, you are too young';
    }
    } catch(error){
            return error.name + ': ' + error.message;
    } finally {
        console.log('Welcome to our site');
    }
}
function message(message) {
    console.log(message);//Welcome to our site
}
message(showMovie (user));//SyntaxError: Age not determined*/




/*function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');//Forgot to pass the second parameter
function showMovie (user){
    try{
        if (user.age == undefined){
            throw new SyntaxError('Age not determined');
        }
        if(user.age >= 18){//undefined
            return 'You can watch this movie';
        } else {
            return 'Sorry, you are too young';
    }
    } catch(error){
            return error.name + ': ' + error.message;
    } finally {
        console.log('Welcome to our site');
    }
}
function message(message) {
    console.log(message);//Welcome to our site
}
message(showMovie (user));//SyntaxError: Age not determined*/


// function MakeUsers(name, age){
//     this.name = name;
//     this.age = age;
// }

// let user;

// try {
//     user = new MakeUsers('Mike'); // Forgot to pass the second parameter
//     showMovie(user);
// } catch (error) {
//     console.log(error.message);
//     const age = prompt('Please enter your age:');
//     user = new MakeUsers('Mike', age);
//     showMovie(user);
// }

// function showMovie(user){
//     if(user.age >= 18){
//         console.log('You can watch this movie');
//     } else {
//         console.log('Sorry, you are too young');
//     }
// }


// function MakeUsers(name, age){
//     this.name = name;
//     this.age = age;
// }

// try {
//     let name = prompt('Введите ваше имя:');
//     let age = prompt('Введите ваш возраст:');

//     if (!+age) {
//         throw new Error('Возраст должен быть числом!');
//     }

//     let user = new MakeUsers(name, age);
//     showMovie(user);
// } catch (error) {
//     console.log(error.message);
// }

// function showMovie(user){
//     if(user.age >= 18){
//         console.log('You can watch this movie');
//     } else {
//         console.log('Sorry, you are too young');
//     }
// }

// function MakeUsers(name, age){
//     this.name = name;
//     this.age = age;
// }

// let user;
// let user1 = new MakeUsers ('vasyl')
// try {
//     let age = prompt("Enter your age");
//     if (!+age) throw new Error("Age is not a number or age is not entered");
//     user = new MakeUsers('Mike', age);
//     else if (age = undefined)
// } catch (error) {
//     console.log(error);
//     let age = prompt("Please enter your age again");
//     user = new MakeUsers('Mike', age);
// }

// function showMovie(user){
//     if(user.age >= 18){
//         console.log("You can watch this movie");
//     } else {
//         console.log("Sorry, you are too young");
//     }
// }

// showMovie(user);

// function MakeUsers(name, age){
//     this.name = name;
//     this.age = age;
// }

// try {
//     let name = prompt('Введите ваше имя:');
//     let age = parseInt(prompt('Введите ваш возраст:'));

//     if (!+age) {
//         throw new Error('Возраст должен быть числом!');
//     }
//     let user = new MakeUsers(name, age);
//     showMovie(user);
// } catch (error) {
//     console.log(error.message);
// }

// function showMovie(user){
//     if(user.age >= 18){
//         console.log('You can watch this movie');
//     } else {
//         console.log('Sorry, you are too young');
//     }
// }


