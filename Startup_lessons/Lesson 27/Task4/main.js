let user = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,
    get userInfo(){
        let data = [];
        for (let key in this){
            data.push (key + ': ' + this[key]);
        }
        console.log(data.join(', '))
    },
    
}
Object.defineProperty(user, 'userInfo', {enumerable : false})
user.userInfo //name: Mike, surname: Davis, age: 25
user.login= 'Nikola'
user.userInfo //name: Mike, surname: Davis, age: 25, login: Nikola