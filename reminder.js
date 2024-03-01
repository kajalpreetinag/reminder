const input = require("readline-sync")
let a = input.questionInt("enter first number: ")
let b = input.questionInt("enter second number: ")

{
    Q=Math.floor(a/b);
    R=a%b;

    console.log(Q,R)
}