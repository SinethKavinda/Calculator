
// function calc() {
//     let number1 = new Number(document.getElementById("number1").value);
//     let number2 = new Number(document.getElementById("number2").value);
//     let op = document.getElementById("op").value;
//     let lbloutput = document.getElementById("output");

//     switch (op) {
//         case "+":
//             let add = number1 + number2;
//             lbloutput.innerHTML = add;
//             break;
        
//         case "-":
//             let sub = number1 - number2;
//             lbloutput.innerHTML = sub;
//             break;
        
//         case "*":
//             let mul = number1 * number2;
//             lbloutput.innerHTML = mul;
//             break;

//         case "/":
//             let div = number1 / number2;
//             lbloutput.innerHTML = div;
//             break;
//         default:
//             lbloutput.innerHTML = "Enter valid Operator"
//             break;
//     }
     
// }

// function num9click() {
//     document.getElementById("num1").value= document.getElementById("num1").value+"9";
// }

// function num8click() {
//     document.getElementById("num1").value= document.getElementById("num1").value+"8";
// }

// function num7click() {
//     document.getElementById("num1").value= document.getElementById("num1").value+"7";
// }

// function num6click() {
//     document.getElementById("num1").value= document.getElementById("num1").value+"6";
// }

// const customer = {
//     name: "Sineth",
//     age: 20,
//     run: function (){
//         console.log("Run......");
//     }
// }

// customer.run()

// // function sample() {
// //     console.log("hello");
// // }

// // let sample = function(){
// //     console.log("hello");
// // }

// // let sample = () =>{
// //     console.log("hello");
// // }

// let sample = () => console.log("hello");


// let numbers = [20,45,10,9,26,4593,546,567,23,57,976,57,347,34]

// console.log(numbers.push(500));
// console.log(numbers);
// //console.log(numbers.slice(14));
// //console.log(numbers.sort());
// //console.log(numbers.length);
// // console.log(numbers.indexOf(10));
// //console.log(numbers.pop(5));
// console.log(numbers.reverse());
// console.log(numbers.splice(5));

const customer =[
    {
    name: "Sineth",
    age: "20",
    address: "Gampaha"
    },
    {
    name: "Isuru",
    age: "20",
    address: "Kegalle"
    }

]

function AddCustomer() {
    let name = document.getElementById("txtusername").value;
    let age =  document.getElementById("txtage").value;
    let address = document.getElementById("txtaddress").value;

    customer.push(
        {
            name,
            age,
            address
        }
    )

    console.log(customer);

}