console.log("Hello In Typescript");
let myName: string = "mahmoud";
console.log(myName);
const myAge: number = 21;
console.log(myAge);
const isGraduated: boolean = false;

// Array of Number
let arrayOfNum: number[] = [1, 2, 3, 4, 5];
console.log(arrayOfNum);

// Array Of Different Data Types
let array: any[] = [
  1,
  2,
  "mahmoud",
  20,
  true,
  { myAge: 21 },
  [3],
  null,
  undefined,
];

console.log(array);

// Array of Specific data types

let arrayOfSpecificDataTypes: [number, boolean, string] = [1, true, "Mahmoud"];
console.log(arrayOfSpecificDataTypes);

// Add Type

type theName = string;

let theName: theName = "Mahmoud";
console.log(theName);

// Create Object With Specific Data Type And Optional Keys

type TheGender = "male" | "female";
type User = {
  readonly id: string;
  myName: string;
  myAge: number;
  gender: TheGender;
  email?: string;
  isGraduated: boolean;
};
const object1: User = {
  id: "1",
  myName: "mahmoud",
  myAge: 21,
  gender: "male",
  email: "mhamoud@gmail.com",
  isGraduated: false,
};
console.log(object1);

// optional param in function

const helloUser = (name: string, age?: number) => {
  return `Hello ${name} Your age is ${age}`;
};
console.log(helloUser("mahmoud"));


const nums = (num1: number = 30, num2: number): number => {
  return num1 + num2;
};

console.log(nums(10, 13));

interface Users {
  name: string;
  age: number;
  gender: TheGender;
}

// type User ={}

interface Profile extends Users { }

const hello = <messageType = number>(message: messageType): messageType => {
  return message;
}
const hello2 = <messageType = number>(n1: messageType, n2: messageType): string => {
  return n1 + '' + n2;
}

console.log(hello<string>('Hello func'));

class Car {
  // private message: string;
  constructor(protected message: string) {
    console.log(this.message);
  }
}

@color('Black')
class Octavia extends Car {
  constructor(protected message: string, private model: string) {
    super(message);
    console.log(this.model);
  }
}

// const car1: Car = new Car('BMW')
// const car2: Octavia = new Octavia('Octavia A8', '2018')

function color(value: string) {
  console.log(value);
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target: any) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}