//присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write


let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let number1 = 1;
let number10 = 10;
let number999 = -999;
let number123 = 123;
let number3_14 = 3.14;
let number2_7 = 2.7;
let number16 = 16;
let istrue = true;
let isfalse = false;
alert(hello);
alert(owu);
alert(com);
alert (ua);
alert(number1);
alert(number10);
alert(number999);
alert(number123);
alert(number3_14);
alert(number2_7);
alert(number16);
alert(istrue);
alert(isfalse);
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(number1);
console.log(number10);
console.log(number999);
console.log(number123);
console.log(number3_14);
console.log(number2_7);
console.log(number16);
console.log(istrue);
console.log(isfalse);
document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(number1);
document.write(number10);
document.write(number999);
document.write(number123);
document.write(number3_14);
document.write(number2_7);
document.write(number16);
document.write(istrue);
document.write(isfalse);


//переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write


hello = 'hi';
owu = 'by';
com = 'yes';
ua = 'no';
number1 = 19;
number10 = 101;
number999 = -9;
number123 = 1123;
number3_14 = '33.14';
number2_7 = 22.7;
number16 = 'lol';
istrue = 'true';
isfalse = 123;
alert(hello);
alert(owu);
alert(com);
alert (ua);
alert(number1);
alert(number10);
alert(number999);
alert(number123);
alert(number3_14);
alert(number2_7);
alert(number16);
alert(istrue);
alert(isfalse);
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(number1);
console.log(number10);
console.log(number999);
console.log(number123);
console.log(number3_14);
console.log(number2_7);
console.log(number16);
console.log(istrue);
console.log(isfalse);
document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(number1);
document.write(number10);
document.write(number999);
document.write(number123);
document.write(number3_14);
document.write(number2_7);
document.write(number16);
document.write(istrue);
document.write(isfalse);


//Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write


const a = 'string';
const b = 'house';
const c = 'tower';
const d = 123;
const e = 23;
const f = 56;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(e);
document.write(f);


//при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write


let name, surname, patronic;
name = prompt("Wath is your name?");
surname = prompt("Surname?");
patronic = prompt("Patronic?")
console.log(name);
console.log(surname);
console.log(patronic);
alert(name);
alert(surname);
alert(patronic);
document.write(name);
document.write(surname);
document.write(patronic);


//Взять переменные из задания 4 и сконкатенировать их в одной переменной person.


let person = name + surname + patronic;
person;


//Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.


let nameD, surnameD, patronicD;
nameD = prompt("Wath is your name?");
surnameD = prompt("Surname?");
patronicD = prompt("Patronic?");
let personD = nameD + surnameD + patronicD;
personD;
alert(personD);
console.log(personD);
document.write(personD);


//при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.


let orange, red, blue;
orange = +prompt('Orange?');
red = +prompt('Red?');
blue = +prompt('Blue?');
console.log(orange);
console.log(red);
console.log(blue);


//- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
 //В одинаковых выражениях в задании не использовать два одинаковых оператора.
//Каждое выражение вложить в свою переменную
  //   5 ? 6 -> true
  //   5 ? 6 -> false
  //   5 ? 6 -> false
  //  5 ? 6 -> false
  //   10 ? 10 -> true
  //   10 ? 10 -> true
  //   10 ? 10 -> false
  //   10 ? 10 -> false
  //   10 ? 10 -> false
  //123 ? '123' -> false
  //123 ? '123' -> true

  
let resultA = 5 < 6;
console.log(resultA);
let resultB = 5 > 6;
console.log(resultB);
let resultC = 5 === 6;
console.log(resultC);
let resultD = 5 >= 6;
console.log(resultD);
let resultE = 10 === 10;
console.log(resultE);
let resultF = 10 <= 10;
console.log(resultF);
let resultH = 10<10;
console.log(resultH);
let resultI = 10 > 10;
console.log(resultI)
let resultJ = 10 != 10;
console.log(resultJ);
let resultL = 123 ==='123';
console.log(resultL);
let resultM = 123=='123';
console.log(resultM);

    
