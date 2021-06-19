// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [
//     new User(1, 'Vasya', 'Petrov', 'petrov-vasya@gmail.com', 'apple'),
//     new User(2, 'Petya', 'Petrov', 'petrov-petya@gmail.com', 'samsung'),
//     new User(3, 'Kolya', 'Petrov', 'petrov-kolya@gmail.com', 'huawey'),
//     new User(4, 'Bogdan', 'Petrov', 'petrov-bogdan@gmail.com', 'apple'),
//     new User(5, 'Pasha', 'Petrov', 'petrov-pasha@gmail.com', 'nokia'),
//     new User(6, 'Sveta', 'Petrova', 'petrova-sveta@gmail.com', 'apple'),
//     new User(7, 'Tolya', 'Petrov', 'petrov-tolya@gmail.com', 'simens'),
//     new User(8, 'Lena', 'Petrova', 'petrova-lena@gmail.com', 'honor'),
//     new User(9, 'Kiril', 'Petrov', 'petrov-kiril@gmail.com', 'apple'),
//     new User(10, 'Dimas', 'Petrov', 'petrov-dimas@gmail.com', 'samsung'),
// ];
// console.log(users);
/////////////////////////////////////////////////////////////////////////////////////////////

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order = []){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Vasya', 'Petrov', 'petrov-vasya@gmail.com','apple', order = ['bread', 'butter']),
    new Client(2, 'Petya', 'Petrov', 'petrov-petya@gmail.com', 'samsung', order = ['juse', 'bread']),
    new Client(3, 'Kolya', 'Petrov', 'petrov-kolya@gmail.com', 'huawey', order = ['juse', 'bread', 'butter']),
    new Client(4, 'Bogdan', 'Petrov', 'petrov-bogdan@gmail.com', 'apple', order = ['juse', 'bread', 'butter']),
    new Client(5, 'Pasha', 'Petrov', 'petrov-pasha@gmail.com', 'nokia', order = ['juse', 'bread']),
    new Client(6, 'Sveta', 'Petrova', 'petrova-sveta@gmail.com', 'apple', order = ['juse', 'butter', 'milk']),
    new Client(7, 'Tolya', 'Petrov', 'petrov-tolya@gmail.com', 'simens', order = ['juse', 'bread', 'butter']),
    new Client(8, 'Lena', 'Petrova', 'petrova-lena@gmail.com', 'honor', order = ['milk', 'bread', 'butter']),
    new Client(9, 'Kiril', 'Petrov', 'petrov-kiril@gmail.com', 'apple', order = ['juse', 'bread', 'butter']),
    new Client(10, 'Dimas', 'Petrov', 'petrov-dimas@gmail.com', 'samsung', order = ['juse', 'bread', 'butter'])
];
// console.log(clients);
/////////////////////////////////////////////////////////////////////////////////////////////


// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, made, year, maxspeed, engine,) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${this.maxspeed}км на годину`);
//         }
    
//     this.info = function(){
//         console.log(`${this.model} ${this.made} ${this.year} ${this.maxspeed} ${this.engine}`);
//     }
//     this.increaseMaxSpeed = function(newSpeed){
//         newSpeed = 20;
//         let i = this.maxspeed + newSpeed;
//         console.log(`Тепер їдемо зі швидкістю ${i}км на годину`);
//     }
//     this.changeYear = function(newValue){
//         newValue = 2021;
//         this.year = newValue;
//         console.log(`${this.year} years`);
//     }
//     this.addDriver = function(driver){
//         this.driver = driver;
//     }
// }

// let car =  new Car('Volvo', 'Sweden', 2020, 260, 2.4,);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed();
// car.changeYear();
// car.addDriver({name:'Pavel', surname: 'Petrov', age: 25});
/////////////////////////////////////////////////////////////////////////////////////////////

// 4 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [
//         new User(1, 'Vasya', 'Petrov', 'petrov-vasya@gmail.com', 'apple'),
//         new User(2, 'Petya', 'Petrov', 'petrov-petya@gmail.com', 'samsung'),
//         new User(3, 'Kolya', 'Petrov', 'petrov-kolya@gmail.com', 'huawey'),
//         new User(4, 'Bogdan', 'Petrov', 'petrov-bogdan@gmail.com', 'apple'),
//         new User(5, 'Pasha', 'Petrov', 'petrov-pasha@gmail.com', 'nokia'),
//         new User(6, 'Sveta', 'Petrova', 'petrova-sveta@gmail.com', 'apple'),
//         new User(7, 'Tolya', 'Petrov', 'petrov-tolya@gmail.com', 'simens'),
//         new User(8, 'Lena', 'Petrova', 'petrova-lena@gmail.com', 'honor'),
//         new User(9, 'Kiril', 'Petrov', 'petrov-kiril@gmail.com', 'apple'),
//         new User(10, 'Dimas', 'Petrov', 'petrov-dimas@gmail.com', 'samsung'),
//     ];

// let filter = users.filter(function(user){
//     return user.id % 2 == 0;
// })
// console.log(filter);

// let sortUp = users.sort(function(user1, user2){
//     return user2.id - user1.id;
// });
// console.log(sortUp);

// let sortDouwn = users.sort(function(user1, user2){
//     return user1.id - user2.id;
// });
// console.log(sortDouwn);
/////////////////////////////////////////////////////////////////////////////////////////////

// 5. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню

// let sort = clients.sort(function (a, b){
// if(a.order > b.order){
//     return -1;
// }else 
//     return 1;
// });
// console.log(sort);