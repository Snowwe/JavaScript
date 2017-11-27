//в браузере F12 - Console
//alert("AlertHello");
//console.log("logHello");
//console.log("hello world...");

//переменные и типы данных
var varTemp;//объявление переменной
console.log("varTemp=",varTemp);
varTemp=10;//присваивание значения
var varTemp;
console.log("varTemp=",varTemp);
pi=3.14;//отсутствует ключевое слово var
console.log("pi=",pi);

//числовой тип данных
var a=5, x=5.8, z=345.23e-2;
console.log(a,x,z);
var c=Infinity;
console.log(c);
console.log(0/0);

//строки
var str1="String1";
var str2="String2";
var char='A';
console.log(str1,str2,char);

//логический тип
var flag1=true;
var flag2=false;
console.log(flag1,flag2);

//ОПЕРАТОРЫ
//арифметические
console.log(2+2,5-3,4*(6-2),8/3,8%3); //8%3 - остаток от деления всегда целое число
//конкатенация - склейка строк
console.log("peace"+", labour, "+"may!!!");
//ньюансы
console.log("10"+5);//105 - происходит преобразование в текст
console.log(5-"10");//-5 - происходит преобразование в число, если + то текст почему-то
console.log(5+Number("10"));//15 - явное преобразование в число
console.log(5+ +"10");//15 - не красиво, лучше не использовать

//диалоговое окно prompt
var num=prompt("Enter number", "placeholder");

//вывод типа данных
console.log(typeof num);
var str3="1010";
console.log(parseInt(str3));//1010
console.log(parseInt(str3,2));//10

//диалоговое окно confirm - возвращает true или false
var flag3=confirm("Make choice");
console.log(flag3,typeof(flag3));

