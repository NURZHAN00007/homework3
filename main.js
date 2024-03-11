// Массив

//                0  1  2  3  4  - индексы эл-тов
// const numbers = [ 1, 2, 4, 5, 6 ] // 1, 2, 4, 5, 6 - эл-ты массива

//                  0      1        2       3        4  - индексы эл-тов
// const drinks = [ 'beer', 'milk', 'coca', 'whisky', 'rom' ]; 

// const some = [ true, [1, 2, 'bread'], 'coca', 3.6, [ 5, [ 'hello'] ] ]; // такой массив обычно не используют

// let drink = drinks[3]; // получаем эл-т массива по его индексу
// console.log( 'Whisky - ', drink);

// const num = numbers[4];
// console.log(num);

// =================
// PUSH
// const vodka = 'vodka';

// drinks.push(vodka); // добавляет эл-т в конец массива

// console.log('добавил новый эл-т - ',drinks);
// console.log('длина массива - ', drinks.length);

// =================
// UNSHIFT
// const vodka = 'vodka';

// drinks.unshift(vodka); // добавляет в начала

// console.log('добавил новый эл-т - ',drinks);

// =================
// POP
// console.log('удаление эл-т - ', drinks, drinks.pop());

// =================
// SHIFT
// console.log('удаление эл-т - ', drinks, drinks.shift());

// =================
// SPlICE
// const deleteCoca = drinks.splice(1);
// const drinks = [ 'beer', 'milk', 'coca', 'whisky', 'rom' ]; 
// // //                                   индекс, кол-во эл-ов для уд.
// drinks.splice(   3,         2,             ); // начинает удалять с 3 индекса, и удаляет 2 эл-та

// const deleteCoca = drinks.splice( 3, 2, 'voda' ); // удаляем и добавляем новый эл-т
// console.log(drinks);

// console.log('==================');

// =================
// SlICE
// const deleteCoca = drinks.splice(1);
// const fruits = ['яблоко', 'груша', 'банан', 'апельсин', 'виноград'];

// const newFruits = fruits.slice(0, 2); // вернется [ 'груша', 'банан' ]

// console.log( fruits );
// console.log( newFruits );

// =================
// CONCAT
// const drinks = ['beer', 'milk', 'coca', 'whisky', 'rom']; 
// const fruits = ['яблоко', 'груша', 'банан', 'апельсин', 'виноград'];

// const mix = drinks.concat(fruits) // возкращает новый массив

// console.log(drinks);
// console.log(mix);

// =================
// INDEXOF
// const drinks = ['beer', 'milk', 'coca', 'whisky', 'rom']; 
// const has = drinks.indexOf('coca'); // если есть такой эл-т, вернет его индекс, если нет вернет -1

// console.log(has);

// =================
// INCLUDES
// const drinks = ['beer', 'milk', 'coca', 'whisky', 'rom']; 
// const h drinkas =s.includes('voda'); // возвращает булевое значение

// console.log(has);



// =================
// =================
// ЦИКЛ

// Do ... while
// let water = 0;

// do {
//   console.log(water);

//   // water = water + 1;
//   water++


// } while (water < 10);

// console.log('конец - ', water);

// let sayHello;

// do {
  
//   sayHello = prompt(' Скажи "Привет" ');

// } while (sayHello === '');

// console.log(sayHello);

// ================
// while

// let number = 0;

// while (number < 10) {

//   console.log(number);
//   number++;

// }

// console.log('конец',number);


// while (true) {

//   const sayHello = prompt(' Скажи "Привет" ');

//   if (sayHello === '' || sayHello === null) {
//     continue;  
//   } 

//   console.log(sayHello);
//   return;

// }

// const error = 500;
// switch (error) {
//   case 404:
//   case 500:
//     console.log('NOT FOUND');
//     break;

//   default:
//     break;
// }


// =======
// for
// for(let count = 0; count < 10; count++) {
//   console.log(count);
// }

// const drinks = ['beer', 'milk', 'coca', 'whisky', 'rom']; 

// for(let i = 0; i < drinks.length; i++) {

//   const drink = drinks[i];

//   console.log( `=============\nИндекс: ${i}\nЭл-т: ${drink}\n============= `); // \n - переносит на новую строку

// }
// const drinks = ['beer', 'milk', 'coca', 'whisky', 'rom']; 
// const array = [];

// for (let i = 0; i < drinks.length; i++) {
//   if (drinks[i] === drinks[4] || drinks[i] === drinks[3]){
//     array.push(drinks[i])
//   }
// }

// console.log(array);

// ======
// Цикл в цикле

// let table = '';

// for (let i = 1; i <= 9; i++) {

//   for (let j = 1; j <= 9 ; j++) {

//     table += (i * j) + ' ';
    
//   }

//   table += '\n';
// }

// console.log(table);


// ======
// Вложенные условия
// const drinkName = prompt('What do you want to drink? Hint: coffee');

// if (drinkName === 'coffee') {

//    const variant = prompt('How would you like your coffee? black/with cream');

//    switch (variant) {
//     case 'black':
//       alert('One black coffee coming right up!');
//       break;
//     case 'with cream':
//       alert('Coffee with cream is a nice choice');
//       break;
//     default:
//       alert("We don't have that variety");
//    }

// } else {
//   alert('Sorry, we serve only coffee.');
// }



