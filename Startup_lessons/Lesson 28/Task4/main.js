function UserType(name) {
    for (let i = 0; i <name.length; ++i){
        this[i] = name[i];
        if (i + 1 == name.length){
            Object.defineProperty(this, 'length', {
                enumerable: true,
                writable: false,
                configurable: true,
                value: i+1
            });
        }
    }
}
let admins = new UserType(['Mike', 'Bob', 'Nikola']);
admins.join = Array.prototype.join;//Для отримання рядка із масиву ми хочемо використати метод join() але у прототипу Object.prototype такої властивості немає, тож ми звернемося до Array.prototype знайдемо там метод join() та привласнимо цей метод властивості admins.join.

console.log(admins.join('; '));