class Hello {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(){
        return this.firstName + "----" + this.lastName;
    }
}

let user = new Hello("a","v");
console.log(user);
