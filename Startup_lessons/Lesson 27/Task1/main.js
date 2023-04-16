let user = {};
Object.defineProperty(user, 'name', {
    value : 'name',
    writable : false
    }
);
Object.defineProperty(user, 'age', {
    value : 'age',
    writable : false
    }
);
Object.defineProperty(user, 'id', {
    value : 'id',
    writable : false,
    configurable : false
    }
)
console.log (user)