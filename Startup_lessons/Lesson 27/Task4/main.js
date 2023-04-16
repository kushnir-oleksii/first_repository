let user = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,
    get userInfo(){
        let newArray= [];
        for (let key in this){
            newArray.push (key + ': ' + this[key]);
        }
        console.log(newArray.join(', '))
    },
    
}
Object.defineProperty(user, 'userInfo', {enumerable : false})
user.userInfo //name: Mike, surname: Davis, age: 25
user.login= 'Nikola'
user.userInfo //name: Mike, surname: Davis, age: 25, login: Nikola