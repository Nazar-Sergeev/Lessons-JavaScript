

// const items1 = [0, 1, 2, 3, 4];

// const items2 = ['item1', 'item2', 'item3', 'item4', 'item5'];

// const items3 = [6, 7, 8, 9, 10, 'item6', 'item7', 'item8', 'item9', 'item10', true, false, true, false, true];

// const empty = [];
// empty[0] = 'Vasya';
// empty[1] = 'Petya'; 
// empty[2] = 'Kolya';
// empty[3] = 'Maks';
// empty[4] = 'Sveta';

// console.log(empty);
// console.log(items1);
// console.log(items2);
// console.log(items3);

// for (i = 0; i < 10; i++){
//     document.write('<div>Hello</div>');
// }

// for (i = 0; i < 10; i++){
//     document.write(`<div>${empty} ${empty[3]}</div>`);
// }

// let i = 0;
// while(i < 20) {
//     document.write('<h1>Hello Okten</h1>');
//     i++;
// };

// let a = 0;
// while(a < 20){
//     document.write(`<h1>${empty[4]}</h1>`)
//     a++;
// }

// const numbers = [10,20,30,40,50,60,70,80,90,100];

// for (let num of numbers){
//     console.log(num);
// };

// const strings = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];

// for (let str of strings){
//     console.log(str);
// }

// const simplyArr = [2, 4, 6, 8 , 'item20', 'item30', 'item40', true, false, true];

// for (let simplAr of simplyArr){
//     console.log(simplAr);
// }

// const arrIf = [1, 2, 3, 'item1', 'item2', true, false, true, false];

// for (let i of arrIf) {
//     if (typeof i === 'boolean')
//        console.log (i);
// }

// for (let a of arrIf){
//     if (typeof a === 'string')
//     console.log(a);
// }

// for (let b of arrIf){
//     if (typeof b === 'number')
//     console.log(b);
// }


// const arr = [];
// arr[0] = 10
// arr[1] = 20
// arr[2] = 30
// arr[3] = 'Vasya'
// arr[4] = 'Viktor'
// arr[5] = 'Sveta'
// arr[6] = true
// arr[7] = false
// arr[8] = false
// arr[9] = true

// for (let i of arr){
//     console.log(i);
// }

// for (i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }

// for(a = 0; a < 100; a++){
//     console.log(a);
//     document.write(a);
// }

// for(b = 0; b <= 100; b = b + 2){
//     console.log(b);
//     document.write(b);
// }

// for(z = 0; z <= 100; z++){
//     if (z % 2 !== 0)
//     console.log(z);
//     document.write(z);
// }

// for(x = 0; x <= 100; x++){
//     if (x % 2 == 0)
//     console.log(x);
//     document.write(x);
// }


// const timeMin = [1,2];

// for (let x of timeMin){
//     console.log(x);
// }


// for (m = 0; m < 3; m++){
//     if(m === 3){
//         break;
//     }
//     for(s = 0; s < 60; s++){
//         if(s === 60){
//             break;
//         }
//     }
//     console.log(`${m}m ${s}s`);
// }

// for(h = 0; h < 12; h++){
//     if(h == 3){
//         break;
//     }
//     for(m = 0; m < 60; m++){
//         if(h == 2 && m == 20){
//             break;
//         }
//         for(s = 0; s < 60; s++){
//             if(h == 4 && m == 20 && s == 60){
//                 break;
//             }
//         }
//     }
//     console.log(`${h} hours ${m} minutes ${s} seconds`);
// }


// let usersWithId = [
//     {id:1, name:'Vasya', age: 31, status: false},
//     {id:2, name:'Petya', age: 30, status: true},
//     {id:3, name:'Kolya', age: 29, status: true},
//     {id:4, name:'Olya', age: 28, status: false}
// ];


// let citiesWithId = [
//     {user_id:1, country: 'USA', city: 'Portland'},
//     {user_id:2, country: 'Ufraine', city: 'Ternopil'},
//     {user_id:3, country: 'Poland', city: 'Warsaw'},
//     {user_id:4, country: 'USA', city: 'Miami'},
// ];

// let usersAndCities = [];

// for(i = 0; i < usersWithId.length; i++){
//     for(x = 0; x < citiesWithId.length; x++){
//         if(usersWithId[i].id === citiesWithId[i].user_id){
//             usersWithId[i].adress = citiesWithId[i]
//         }
//     }
// }
// usersAndCities.push(usersWithId);
// console.log(usersAndCities);


// for (let user of usersWithId){
//     for (let city of citiesWithId){
//     if(user.id === city.user_id){
//         user.adrees = city;          
//         }
//     }
// }
// usersAndCities.push(usersWithId);
// console.log(usersAndCities);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


