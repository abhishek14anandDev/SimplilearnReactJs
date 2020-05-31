"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function () {
    function Student() {
        _classCallCheck(this, Student);
    }

    _createClass(Student, [{
        key: "setDetails",
        value: function setDetails(sname, course, fee) {
            this.sname = sname;
            this.course = course;
            this.fee = fee;
        }
    }, {
        key: "getDetails",
        value: function getDetails() {
            console.log("Name : " + this.sname + ", Course : " + this.course + ", fee : " + this.fee);
        }
    }]);

    return Student;
}();

var s1 = new Student();

s1.setDetails("Abhishek", "React", "19000");
s1.getDetails();