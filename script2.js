// Part 4
let firstName = 'Dylan';
let information = { firstName };
// Part 5
let str = 'Hello';
for (let char of str)
    console.log(char);
// Part 6
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
// Part 7
const square = num => num * num;
console.log(square(2));
const Str = 'Hello World';
console.log(Str.includes('hello'));
// Part 8
class Car {
    constructor(wheels, doors) {
        this.wheels = wheels;
        this.doors = doors;
    }
    describeMe() {
        console.log(`Wheels: ${this.wheels} and Doors: ${this.doors}`);
    }
}
const car1 = new Car(4, 2);
car1.describeMe();
// Part 9
function takeLongTimeAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve('Long time value'), 1000);
    });
}

async function test() {
    const v = await takeLongTimeAsync();
    console.log(v);
}

test();