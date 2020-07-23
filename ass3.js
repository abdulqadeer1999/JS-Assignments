
// <!-- Assignment # 38-44
// Task # 2 -->

// function check_leapyear(){
  
//     var year;

     
//     year = document.getElementById("year").value;

    
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }

// Task # 5

// const array = [1,2,3,4,5,6];

// if(array.includes(4) ){
// console.log("true 4 was found in the array")// true 4 was found in the array
// } 

// Task # 6



// var string = "heelloo world";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// console.log(string);


// Task # 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

console.log(findOccurrences());

// Chap 43 to 48

// Task # 4

// function changeImage(){
//     var carImage = document.getElementById("img")
//     carImage.src = "car1.jpg"
// }

// function changeImageBefore(){
//     var carImage = document.getElementById("img")
//     carImage.src = "car2.webp"    

// }

// function increase(){
//     var increment = document.getElementById("increment")
//     for (var i =0; i<=100; i++){
//         increment++;

//     }
//     console.log(increment+1)
// }


// Chap 49 to 52

// function submit(){
//     var submission = document.getElementById("sub")
//     submission.value = " "
//     console.log(submission.value)
// }

// Task # 2

// function readMore(){
//     var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil ratione fugit quisquam rerum, provident distinctio! Necessitatibus, ut. Maiores rem harum eveniet explicabo expedita nisi mollitia impedit voluptatibus minus esse."
//     var paragraph = document.getElementById("para")
//     paragraph.innerHTML = text
// }
