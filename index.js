// Q1. Calculate Sum of numbers frpm 1 to 100.

// let sum = 0;
//  for (var index = 1; index <= 100; index++) {
//     sum = sum + index;
    
//  }

//  console.log(sum);


// Q2 Calculate Sum of all the Numbers divisible by 5 from 1 to 500.

// let sum = 0;
// for (var index = 1; index <=500; index++) {
//    if (index% 5 == 0) {
//       sum=sum+index;
      
//    }
//    console.log(sum);
// }


// Calculate Sum of all 3 and 5 multiplies under 1000.

// let sum = 0;

// for (let index = 1; index < 1000; index++) {
//    if (index%3==0||index%5==0) {
//       sum=sum+index;
      
//    }

// }
// console.log(sum);   


//  Q4 Write a JavaScipt for loop that iterates from  to 15. For each
// iteration,
// it checks if the number is odd or event,and displays a message 
// on the screen. 

// for (let index = 0; index <= 15; index++) {
//    if (index%2 == 0) {
//       console.log(index,"is even");
//    } else {
//       console.log(index,"is odd");
      
//    }
   
// }

// Q5 Write a JavaScript program to construct the following CanvasPattern, using a 
// nested for loop.

// *
// * *
// * * *
// * * * * 
// * * * * *
   
// let rows = 5;   //Numbers of rows in the pattern

// for (let i = 1; i <= rows; i++) {
//    let pattern = '';
//    for (let j = 1; j <= i; j++){
//      pattern += '* ';   
//    }
//    console.log(pattern);

   
// }


// Q6 Write a JavaScript program that computes the averages marks of the following 
// students. Then, this average is used to determine the corresponding grade.

// Students Name     Marks
// David              88
// Vinoth             77
// Divya              88
// Ishitha            95
// Thomas             68
// The grades are computes as follows :


// Range              grade
// <60                 F
// <70                 D
// <80                 C
// <90                 B
// <100                A

// let Vinoth = 80;
// let David = 77;
// let Divya = 88;
// let Ishitha = 95;
// let Thomas = 68;
// let sum = David + Vinoth + Ishitha + Divya + Thomas;
// let avgmarks = sum / 5;
// if (avgmarks < 60) {
//    console.log("Grade:F");
// }

// else if(avgmarks < 70){
//    console.log("Grade:D");
// }
// else if(avgmarks < 80){
//    console.log("Grade:C");
// }
// else if(avgmarks < 90){
//    console.log("Grade:B");
// }
// else if(avgmarks < 100){
//    console.log("Grade:A");
// }
// console.log(avgmarks);


// let pattern;   //Numbers of rows in the pattern

// for (let i = 1; i <= 5; i++) {
//    for (let j = 1; j <= i; j++){
//      pattern += '* ';   
//    }
//    pattern += '\n'
// }
//    console.log(pattern);


// let day = 1;

// let dayNmae;

// if (day == 1){
//    console.log("Sunday");}

   
// else if(day == 2){
//    console.log("Monday");}

//    else if(day == 3){
//       console.log("Tuesday");}

//       else if(day == 4){
//          console.log("Wednesday");}

//          else if(day == 5){
//             console.log("Thursday");}

//             else if(day == 6){
//                console.log("Friday");}

//                else if(day == 7){
//                   console.log("Saturday");}

//                   else{
//                      console.log("not a valid day number");
//                   }
 
// let num = 15;

// for (let i = 0; i <= 15; i++) {
//    if (i == 6){
//       break;
//    }
//    console.log(i);
   
   
// }

// let num = 20;

// for (let i = 0; i <= num; i++) {
//    if (i % 2 === 0){
//       continue;
//    }
//    console.log(i);
   
   
// }

// function Person(name,age) {
//    console.log("My name is",name);
//    console.log("My name is",age);
   
// }
// Person("Tushar",22);

// let Sum = function(num1 , num2){
//    console.log(num1 + num2);
// }
// Sum(2,3); 


// const Multiply = (a,b) =>{
//    console.log(a*b);
// };

// Multiply(5,6);


// callback function

// const Greet1 =(Greet1)=>{
//    console.log("I am first function");
//    // setTimeout(() => {
//    //    Greet2();
//    // }, 2000);

//    setInterval (() => {
//       Greet2();


//    },3000);
      
   
   
// };
// const Greet2 =()=>{
//    console.log("I am second function");
// };

// Greet1(Greet2);

// let name = "            Tushar";

// console.log(name.trim());

// let name = "Tushar";

// console.log(name.charAt(3));

// console.log(name.indexOf("r"));

// console.log(name.toUpperCase());


// let data = [10,20,"Ayush",true,50,40,60];
// data.push(70);
// data.pop(60);
// data.unshift(5000);
// data.shift(5000);
// console.log(data);

// function Parent () {

//    let childName = "Lavi";
//    let parentName = "Aryan";

//    console.log("Parent Name is", parentName);

//    function child () {

//       console.log("Child Name is",childName);
      
      
//    }
//    child();
   
// }
// Parent();




// let person = {
//    name: "Tushar",
//    age :25,
//    address:"Noida",
//    Info,
// }

// function Info() {
//    console.log("My name is", this.name);
//    console.log("My age is", this.age);
//    console.log("My address is" , this.address);
// }

// person.Info();

// Nested Object:- A object have inside multiple object with seperate key.

// let personsData = {
//    name:{
//       firstName :"Tushar",
//       lastName:"Lavi"
//    },
//    address:{
//       currentAddress:"Noida",
//       postalAddress:"Chhapraula",
//    },
// }
// console.log(personsData.address.postalAddress,personsData.name.firstName);

// Set:- Set is a collection of unique value similar to array.

// let item = new Set([10, 20, 30, 40, 50]);

// item.add(60);

// console.log(item);

// let arrItem = Array.from(item);

// arrItem.pop();

// let newSet = new Set(arrItem);

// console.log(newSet);



// let arrItem = Array.from(item);

// arrItem.push("60");

// let newSet = new Set(arrItem);

// console.log(newSet);


// let date = new Date();

// console.log(date);

// toDateString():- This method is use to find the date.

// console.log(date.toDateString());
// console.log(date.toLocaleString());



// getHour:- This method is used to find the hour from date project .

// let hours = date.getHours();

// console.log(hours);

// let seconds = date.getSeconds();

// console.log('The Time is : ${hours} : ${minutes} : ${seconds}');


// let day = date.getDay();
// console.log(hours);

 // let month = date.getMonth();
// console.log(month);

// let year = date.getYear();
// console.log(year);


// let time = newTime();
// console.log(time);


// const Time = ()=>{
//     let date = new Date(); 

//     let day = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     console.log(`The time is : ${hours} : ${minutes} : ${seconds}`);

// };

// setInterval(() => {
//     Time();
    
// }, 1000);


// Dom :- Dom is a document object model which provide javascript content to html.


// // document :- getElemmentById:- This key-word use to target the html element in the javascript(js) file.

// let container = document.getElementById("container");

// container.innerHTML = "I am dom"

// console.log(container);


// // document.create element :- This key-word is used to create a new HTML element from the js.

// let h1Element = document.createElement("h1");

// h1Element.textContent = "I am a heading";

// h1Element.className = "h1-style"

// container.appendChild(h1Element);

// // Calling showTime function at every second
// setInterval(showTime, 1000);

// // Defining showTime funcion


// function showDate() {

// 	let date = new Date();
// 	let day = date.getDay();
// 	let month = date.getMonth();
// 	let year = date.getYear();

// 	let vivo = document.getElementById("vivo")

// 	vivo.textContent = day
// 	console.log(vivo)
	
// 	let vivo = document.getElementById("vivo")

// 	vivo.textContent = month
// 	console.log(vivo)
	
// 	let vivo = document.getElementById("vivo")

// 	vivo.textContent = year
// 	console.log(vivo)

// }









let DAYS = document.querySelector("#DAYS");
let weeks = new Date;
DAYS.innerText = weeks.toDateString();


// function showTime() {
// 	// Getting current time and date
// 	let time = new Date();
// 	let hour = time.getHours();
// 	let min = time.getMinutes();
// 	let sec = time.getSeconds();

// 	am_pm = "AM";
	
		

// 	// let square1 = document.getElementById("square1")

// 	// square1.textContent = hour
// 	// console.log(square1)
// 	// let square2 = document.getElementById("square2")

// 	// square2.textContent = min
// 	// console.log(square2)
// 	// let square3 = document.getElementById("square3")

// 	// square3.textContent = sec
// 	// console.log(square3)

// 	// Setting time for 12 Hrs format
// 	if (hour >= 12) {
// 		if (hour > 12) hour -= 12;
// 		am_pm = "PM";
// 	} else if (hour == 0) {
// 		hr = 12;
// 		am_pm = "AM";
// 	}

// 	hour =
// 		hour < 10 ? "0" + hour : hour;
// 	min = min < 10 ? "0" + min : min;
// 	sec = sec < 10 ? "0" + sec : sec;

// 	let currentTime =
// 		hour +
// 		":" +
// 		min +
// 		":" +
// 		sec +
// 		am_pm;
// 		setInterval(() => {
// 		    showTime();
			
// 		}, 1000);

// 	// // Displaying the time
// 	// document.getElementById(
// 	// 	// "clock"
// 	// ).innerHTML = currentTime;

	

	
// }


// showTime();

// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		" " +
        am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();













  





