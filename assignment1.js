
const calculate=["Martina", 23, 1.93 ];
if (!calculate){
    console.log ("This is an error")
} else {
    console.log ("Correct")
}
 console.log (calculate)

 console.log(typeof "Martina");
console.log(typeof '23');
console.log(typeof '1.93');

const result1 = calculate.map((num) => num + num);
console.log(result1)

const result2 = calculate.map((num) => num *2);
console.log(result2)