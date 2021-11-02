const pessoa = {
    firstName: 'Raul',
    lastName: 'Vieira',
    id: 1,
    fullname: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullname());