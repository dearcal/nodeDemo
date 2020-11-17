"use strict";
var Hello = /** @class */ (function () {
    function Hello(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Hello.prototype.greeter = function () {
        return this.firstName + "----" + this.lastName;
    };
    return Hello;
}());
var user = new Hello("a", "v");
console.log(user);
