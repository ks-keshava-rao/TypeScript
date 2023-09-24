function add(n1, n2, showresult, phrase) {
    var result = n1 + n2;
    if (showresult)
        console.log(phrase + result);
    else
        return result;
}
var number1; // if not initializing good to give the type 
number1 = 5; //any other type added to this variable will give error . 
var number2 = 3;
var result = add(number1, number2, true, "this is the phrase ");
var person = {
    name: 'keshav',
    age: 30
};
console.log(person.name);
//string
var activity;
activity = ["one"];
var activity2;
activity2 = ["two"];
//tuple
var person3 = {
    name: 'keshav',
    age: 30,
    arraynumber: ["haha", 4]
};
//Enum
var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["READ_ONLY"] = 1] = "READ_ONLY";
    role[role["AUTHOR"] = 2] = "AUTHOR";
})(role || (role = {}));
var person4 = {
    name: 'keshav',
    age: 30,
    Role: role.ADMIN
};
