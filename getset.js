const person = {
    name : 'geroge',
    surname : 'boogle',
    get fullname() {
        return this.name + ' ' + this.surname;
    },
    set fullname(fullname) {
        let parts = fullname.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
}

console.log(person.fullname);
console.log(person.fullname = 'alex wang');
console.log(person.name);