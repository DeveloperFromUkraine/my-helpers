// // var result = [];
// //
// // for (var i = 0; i < 5; i++) {
// //     result[i] = (function inner(x) {
// //         // additional enclosing context
// //         return function() {
// //             console.log(x);
// //         }
// //     })(i);
// // }
// //
// // result[0](); // 0, expected 0
// // result[1](); // 1, expected 1
// // result[2](); // 2, expected 2
// // result[3](); // 3, expected 3
// // result[4](); // 4, expected 4
//
//
// // console.log(1)
// //
// // setTimeout(function() {
// //     console.log(2)
// // }, 0)
// //
// // new Promise(() => {
// //     console.log(111)
// // })
// //
// // new Promise(resolve => {
// //
// //     console.log(3)
// //
// //     return resolve()
// //         .then(() => {
// //             return console.log(4)
// //         })
// // })
// //
// //
// // console.log(5)
//
// setTimeout(function timeout() {
//     console.log('Таймаут');
// }, 0);
//
// let p = new Promise(function(resolve, reject) {
//     console.log('Создание промиса');
//     resolve();
// });
//
// p.then(function(){
//     console.log('Обработка промиса');
// });
//
// console.log('Конец скрипта');
//
// for (var i = 0; i < 10; i++) {
//     // передадим функции переменную i, в результате
//     // у каждой функции будет доступ к правильному значению индекса
//     setTimeout(function(i_local) {
//         return function() {
//             console.log('The index of this number is: ' + i_local);
//         }
//     }(i), 3000);
// }
//
// for (let i = 0; i < 10; i++) {
//     // использование ключевого слова let, которое появилось в ES6,
//     // позволяет создавать новую привязку при каждом вызове функции
//     // подробности смотрите здесь: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
//     setTimeout(function() {
//         console.log('The index of this number is: ' + i);
//     }, 3000);
// }


