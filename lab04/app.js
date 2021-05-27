// comments one line 
/*first line 
second line 
*/  
// ctlr + / 

// DataTypes :
/* 
1- String => text => " " or ' ' ex: "Ahmed" "5"
2- Number =>  5 1.3 -8  
3- Boolean => true / false
*/

//Variables : 
var userName = "Ahmed";
// console for the develpoer 
// console.log(userName);

// for users :
// 1- alert() 
//  alert(userName);
// 2- document.write()
// document.write("<p>"+ userName +"</p>");


// operations (sympols that does action ) 
//  1- assignment operator = 
//  2- arithmatic operators :
//     + addition 1+1=>2
//     - subtraction 1-1 
//     * mul 
//     / division 
//     % module 
//     ++ increment  1++ =>2 5++ => 6
//     -- decrement  5-- => 4
//     ** power off  2**2 ("same as 2^2 in math") 2**3
//  3- comparsion 
//    ==    4==4 true / 4=="4" true ("compare only the value")
//    ===  4===4 true/  4==="4" false ("compares the datatype             and value") 
//    != ("compare only the value") 4!=5 true 4!="4" false
//    !== ("compares the datatype and value")  4!=="4" true
//    < 4<8 true
//    <= 
//    >=
//    > 

// console.log(4=="4");
// console.log(4==="4");
// console.log(4!="4");
// console.log(4!=="4");


// conditional statment 
/*
if(condition){
  if the condition is true run this code .....
}else {
  if the condition is false run this code ..
}


if(condition1){
  
}else if(condition2){
  
}else if(condition3){

}else{

}
*/



// if(userName=="Ahmed"){
//   console.log("Hello Ahmed")
// }else{
//   console.log("Hello "+userName)
// }

// var age=25

// if(age == 25 ){
//   console.log("what do you work ?");
// }else if(age<=10){
//   console.log("go back to school !!");
// }else{
//   console.log("welcome to our website");
// }
var hXh = "ford";



var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName )


var favcar = prompt("What is your fav car  ?");
// console.log(userAge);

if(favcar === hXh ){
  // console.log("what do you work ?");
  document.write("<p> Welcome to the car fan </p>")
}else if(favcar === "AOT"){
  document.write('<img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/692999/2018-10best-cars-the-best-cars-for-sale-in-america-today-feature-car-and-driver-photo-696572-s-original.jpg?resize=980:*" width="250px" alt="AOT"/>')
}else{
  alert('please next time answer either ford or Mercedes ')
}
