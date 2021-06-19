
// 1) створити функцію яка приймає масив та виводить його

// let array = [8, 11, 15, 22, 30];

// function functionArray(item){
//     console.log(item);
// }

// functionArray(array);



//2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function functionArray2(a, b, c){
//     let emptyArray = [];
//     for(i = 0; i < a; i++){
//         emptyArray.push(Math.floor(Math.random()* (c-b)+b)) ;
//     }
//     return emptyArray;
// }
// let array1 = functionArray2(10, 10, 100);

// functionArray2(array1);
// console.log(array1);



//3) створити функцію яка приймає три числа та виводить найменьше.

// let min;

// function returnNumMin (a, b, c){
//     if(a < b && a < c) {
//         min = a;
//     }
//     if(b < a && b < c){
//         min = b;
//     }
//     if(c < a && c < b){
//         min = c;
//     }
//     console.log(min);
//     return min;
// }
// returnNumMin(5, 1, 3);


///4) створити функцію яка приймає три числа та виводить найбільше.

// let max;
// function returnNumMax(a, b, c){
//     if(a > b && a > c){
//         max = a;
//     }
//     if(b > a && b > c){
//         max = b;
//     }
//     if(c > a && c > b){
//         max = c;
//     }
//     console.log(max);
//     return max;
// }
// returnNumMax(75,18,41);


//5) створити функцію яка повертає найбільше число з масиву

// let arrayNum = [12, 512, 45, 87, 31];

// function returnArrayNum(){
//     let max = arrayNum[0];
//     for (item of arrayNum){
//         if(max < item){
//             max = item;
//         }
//     }
//     return max;
// }
// let max = returnArrayNum();
// console.log(max);

//6) створити функцію яка повертає найменьше число з масиву

// let arrayNum = [12, 512, 45, 7, 31];

// function returnArrayNum(){
//     let min = arrayNum[0];
//     for(item of arrayNum){
//         if(min > item){
//             min = item;
//         }
//     }
//     return min;
// }
// let min = returnArrayNum();
// console.log(min);


//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let array = [10, 20, 30, 45, 50, 20];

// function returnSumNum(){
//     let sum = 0;
//     for(item of array){
//         sum += item;
//     }
//     return sum;
// }
// let resault = returnSumNum();
// console.log(resault);


//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [10, 20, 30, 45, 50, 20];

// function returnSumNum(){
//     let sum = 0;
//     for(item of array){
//         sum += item;
//     }
//     return sum/array.length;
// }
// let resault = returnSumNum();
// console.log(resault);


//9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// let users = [
//     {id:1, name:'Vasya', age: 31, status: false},
//     {id:2, name:'Petya', age: 30, status: true},
//     {id:3, name:'Kolya', age: 29, status: true},
//     {id:4, name:'Olya', age: 28, status: false}
// ];

// function returnArray(){
//     let i = 0;
//     for(item of users){
//         if(typeof item === 'object'){
//             i++;
//         }
//     }
//     return i;
// }
// let resault = returnArray();
// console.log(resault);


//10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// let users = [
//     {id:1, name:'Vasya', age: 31, status: false},
//     {id:2, name:'Petya', age: 30, status: true},
//     {id:3, name:'Kolya', age: 29, status: true},
//     {id:4, name:'Olya', age: 28, status: false}
// ];

// function returnArray(){
//     let newArray = []
//     for(i = 0; i < users.length; i++){
//         for(value in users[i]){
//             newArray.push(users[i][value]);
//         }
//     }
//     return newArray;
// }

// let resault = returnArray();
// console.log(resault);

// let newArray = []
// function returnArray(){
//     for(value of users){
//         for(keys in value){
//             console.log(keys);
//             newArray.push(keys);
//         }
//     }
//     return newArray;
// }

// let resault = returnArray();
// console.log(resault);



//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


// function returnNewArray(){
//     let array1 = [1, 2, 3, 4, 5];
//     let array2 = [4, 2, 5, 3, 6];
//     let array3 = []
//     for(i = 0; i < array1.length; i++){
//         array3.push(array1[i] + array2[i])
//     }
//     return array3;
// }

// let resault = returnNewArray();
// console.log(resault);



//12) створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function returnMinNum(){
//     let max = arguments[0]
//     let min = arguments[0]
//     for (item of arguments){
//         if(item > max){
//             max = item;
//         }
//         if(item < min){
//             min = item;
//         }
//     }
//     console.log(max);
//     return min;
// }    

// let min = returnMinNum(6, 3, 7, 5 ,21, 12 ,2);
// console.log(min);
