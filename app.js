// function sum(a,b)
// {
//    s=a+b;
//    console.log(a)
//    return(s)
   
// }
// let v=sum(2,8);
// console.log(v);


// const sum=(a,b)=>{
//     console.log(sum)
// }
// const multi=(a,b)=>{
//     console.log(a*b)
// }


// Count number of Vowel:
// function countVowel(str)
// {
//    let count=0;
//    for (const char of str)
//    {
//       if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u" )
//       {
//          count++;
//       }
//    }
// console.log(count);
// }

// count number of Variable
// const countVar=(str)=>{
//    let count=0;
//    for(const char of str)
//    {
//       if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u" )
//       {
//          count++;
//       }
//    }
//    return(count);
// }

// for each funtion
// let array=[1,2,3,4,5];
// array.forEach((val,idx) => {
//    console.log(val,idx)
   
// });

// let array=[2,3,4,5]
// array.forEach((val)=>{
//    console.log(val*val)
// })

// let num= [1,2,3,4];
// let newarray= num.map((val) => {
// return val*val;
// })
// console.log(newarray)

// Fibonassi upto nth term
// function Fibo(n)
// {
// let a=0, b=1;
// while (b <= n) {
//     let temp = a + b;
//     a = b;
//     b = temp;
// }
// return b
// }
// console.log (Fibo(10))

//palindrome
function checkPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if (string == reverseString) {
        console.log(' palindrome');
    }
    else {
        console.log('Not a palindrome');
    }
}
const string = prompt('Enter a string: ');
console.log(checkPalindrome(string));
