"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class test{
//     constructor(){
//         console.log("Object instatiation")
//     }
// }

// let o1 = new test();
// let o2 = new test();

var Person = function () {
    function Person(name, gender, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    _createClass(Person, [{
        key: "getdetails",
        value: function getdetails() {
            console.log("Name : " + this.name + ", Gender : " + this.gender + ", age : " + this.age);
        }
    }]);

    return Person;
}();

var p1 = new Person("Abhishek", "male", 28);
var p2 = new Person("Shobha", "female", 30);

p1.getdetails();
p2.getdetails();

var Test = function Test() {
    _classCallCheck(this, Test);

    this.len = function (name) {
        return name.length;
    };
    this.upper = function (name) {
        return name.toUpperCase();
    };
    this.lower = function (name) {
        return name.toLowerCase();
    };
    this.firstName = function (name) {
        return name.substr(0, name.indexOf(' '));
    };
    this.lastName = function (name) {
        return name.substr(name.lastIndexOf(' ') + 1);
    };
};

var o1 = new Test();
console.log(o1.len("Kiran Kumar"));
console.log(o1.upper("Kiran Kumar"));
console.log(o1.lower("Kiran Kumar"));

console.log(o1.firstName("Abhsihe Anand"));
console.log(o1.lastName("Abhsihe Anand"));

var test3 = function () {
    function test3() {
        _classCallCheck(this, test3);
    }

    _createClass(test3, [{
        key: "display",
        value: function display() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "no name";

            console.log(name);
        }
    }]);

    return test3;
}();

var ji = new test3();
ji.display("Abhishek");

var calculations = function () {
    function calculations() {
        _classCallCheck(this, calculations);
    }

    _createClass(calculations, null, [{
        key: "square",
        value: function square(n) {
            return n * n;
        }
    }]);

    return calculations;
}();

console.log(calculations.square(5));