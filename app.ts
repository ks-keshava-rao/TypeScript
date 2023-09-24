function add(n1: number, n2: number, showresult: boolean, phrase: string) {
    let result = n1 + n2;
    if (showresult) console.log(phrase + result);
    else return result;
}
let number1: number; // if not initializing good to give the type 
number1 = 5; //any other type added to this variable will give error . 
const number2 = 3;
const result = add(number1, number2, true, "this is the phrase ");

const person: { // const person: { name: string; age: number; } this is the object ype .
    name: string
    age: number
} = {
    name: 'keshav',
    age: 30
}
console.log(person.name);

 //string
let activity: string[]
activity = ["one"];

let activity2: any[]
activity2 = ["two"];

//tuple
const person3: {
    name: string
    age: number
    arraynumber: [string,number] // tuple - first element as string  . push() doesn't work in this
} = { 
    name: 'keshav',
    age: 30,
    arraynumber:["haha",4]
}

//Enum

enum role { ADMIN=0, READ_ONLY , AUTHOR}
const person4 = { 
    name: 'keshav',
    age: 30,
    Role: role.ADMIN
}

