'use strict';

var fruits = ['banana', 'apple', 'grapes', 'cherry', 'papaya', 'mango'];

fruits.map(function (t) {
    return console.log(t);
});

var employees = [{ "id": 1001, "ename": "Anil", "job": "Developer", "salary": 15500 }, { "id": 1002, "ename": "Kiran", "job": "Developer", "salary": 25500 }, { "id": 1003, "ename": "Abhishek", "job": "Developer", "salary": 35500 }, { "id": 1004, "ename": "Hari", "job": "Trainer", "salary": 45500 }, { "id": 1005, "ename": "Shobha", "job": "Developer", "salary": 15500 }];

employees.map(function (t) {
    return console.log(t.ename + ' working as ' + t.job);
});

console.log(fruits.filter(function (t) {
    return t.length == 5;
}));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = employees.filter(function (x) {
        return x.job == "Trainer";
    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var e = _step.value;

        console.log(e);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var x = employees.every(function (x) {
    return x.salary > 5000;
});
console.log(x);

if (employees.every(function (x) {
    return x.salary > 5000;
})) console.log("All are eligible for loan");else console.log("Some of them  are eligible for loan");

if (employees.some(function (x) {
    return x.job == "Trainer";
})) console.log("Some of them are Trainers");