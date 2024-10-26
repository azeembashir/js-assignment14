// function dateTime(){
//     var rightNow = new Date();
//     document.write(rightNow);
// };
// dateTime();

// function greets (){
//     var fName = prompt("enter your first name");
//     var lName = prompt("enter your last name");
//     document.write("Hello Good morning ", fName," ", lName);
// }
// greets ();


// function sum (){
//     var a = +prompt("enter a number");
//     var b = +prompt("enter b number");
//     document.write("The sum is ", a+b);
// }
// sum ();


// function calculator (){
//     var num1 = +prompt("enter a number");
//     var num2 = +prompt("enter b number");
//     var opt = prompt("enter operation");
//     if(opt === "+"){
//        var sum = num1 + num2;
//        document.write("The sum is ", num1 + num2);
//     }else if(opt === "-"){
//         var sub = num1 - num2;
//        document.write("The sub is ", num1 - num2);
//     }else if(opt === "*"){
//         var mul = num1 * num2;
//        document.write("The Mul is ", num1 * num2);
//     }else if(opt === "/"){
//         var div = num1 / num2;
//        document.write("The div is ", num1 / num2);
//     }else if(opt === "%"){
//         var rem = num1 % num2;
//        document.write("The reminder is ", num1 % num2);
//     }
    
// }
// calculator ();

// function square (){
//     var num = +prompt("enter a number");
//     var sq = num * num;
//     document.write(sq);
// }
// square ();

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// document.write(factorial(5));


// function count(){
//     var snum = prompt("enter start num");
//     var lnum = prompt("enter end num");
//     let output = "";
//     for(let i=snum; i<=lnum; i++){
//         output += i + " ";
//     }
//     document.write(output);
// };
// count();


// function hypotneious(){

//     function square(x){
//         return x*x;
//     }

//     var base = +prompt("enter base");
//     var perp = +prompt("enter perpendicular");

//     var hypo = Math.sqrt(square(base) + square(perp));
//     document.write(hypo);

    
// };
//  hypotneious();

// function calArea(width, height){
//     var area = width * height;
//     document.write(area);


// };
// calArea(4, 5);

// function calArea(width, height){
//     var area = width * height;
//     document.write(area);


// };
// let a =3;
// let b =4;
// calArea(a, b);

// function palindrome(str){
//     // var str = prompt("enter any word");
//     var cleanedStr = str.toLowerCase();
//     var revStr = cleanedStr.split('').reverse().join('');
    // if (revStr === str){
    //     // document.write("yes this is palindrome");
    //     return;
    // }else{
    //     // document.write("sorry this is not a palindrome");
    //     return;
    // }
//     return cleanedStr  === revStr;
// };
// document.write(palindrome("mom"));


// function capitalizeWords(str) {
//     return str
//       .split(' ') 
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
//       .join(' '); 
//   }
  
// document.write(capitalizeWords("hello world from javascript")); 
  

// function findLongestWord(str) {
//     let words = str.split(' '); 
//     let longestWord = words.reduce((longest, currentWord) => {
//       return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
  
//     return longestWord;
//   };
// document.write(findLongestWord("Web Development Tutorial"));

// function countLetterOccurrences(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
// document.write(countLetterOccurrences("JSResourceS.com", "o")); 
  

// function calcCircumference(r){
//     // let pi = 3.142;
//     return 2*Math.PI*r;
// };
// document.write("The ciecumference is: " ,calcCircumference(5));

// function calcArea(r){
//     // let pi = 3.142;
//     return Math.PI*(r*r);
// };
// document.write("The Area is: " ,calcArea(5));