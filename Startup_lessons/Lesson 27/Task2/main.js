let dataBase = {
    dbName : 'user',
    dbType : 'MySQL'
};
let configurateDB = {
    token : '123',
    password : '567',
    user : 'admin'
}
Object.seal(configurateDB);
Object.freeze(dataBase);
console.log (Object.getOwnPropertyDescriptor(dataBase, 'dbName'))
console.log (Object.getOwnPropertyDescriptor(configurateDB, 'token'))