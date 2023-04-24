class User {
    #phone;
    constructor (name, phone) {
        this.name = name;
        this.#phone = phone;
    }
    getPhone (isAdmin) {
        if (isAdmin){
            return console.log(this.#phone)//перевіряємо, якщо адмін то просто виводиться номер телефону
            }
        else {
            let hidePhone = this.#phone.split('');//якщо не адмін, створюємо масив данних, всі значення розділяємо
            for (let i = 4; i < 10; ++i){//робимо перебір з 4 елементу по 10
                if (i == 7) continue //якщо 7 елементів ?
                hidePhone[i] = '*'// елементи  замінюємо на *
            }
            console.log(hidePhone.join('')); //приєднуємо потім всі елементи
        }    
    }
}
let user1 = new User('Mike', '067-888-88-99');
let user2 = new User('Tom', '099-888-88-99');
user1.getPhone(false);
user2.getPhone(false);
user1.getPhone(true);
user2.getPhone(true);