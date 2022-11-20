'use strict';

//Режим 1 

const firstValue = document.getElementById('firstValue');//доступ к 1 числу пользователя
const secondValue = document.getElementById('secondValue');//доступ к 2 числу пользователя
const equallyValue = document.getElementById('equallyValue');//доступ к выводу
const inputText = document.getElementById('inputText');//достум к информационному тексту
const textInstruction ="Введите, пожалуйста, число!!!";
let num1,num2,result;


function plus(){//плюс
inputText.innerHTML= '';
num1 = firstValue.value;
num2 = secondValue.value;

if((num1 !=='') && ( num2 !=='')&&(!isNaN(num1&&num2) )){//Защита от 0 и string
num1 = Number(num1);
num2 = Number(num2);
result = num1 + num2;
equallyValue.value = result;

}
else{
inputText.innerHTML=textInstruction;
firstValue.value='';
secondValue.value='';

}
}

function minus(){ //минус
inputText.innerHTML= '';
num1 = firstValue.value;
num2 = secondValue.value;

if((num1 !=='') && ( num2 !=='')&&( !isNaN(num1&&num2) )){//Защита от 0 и string
num1 = Number(num1);
num2 = Number(num2);
result = num1 - num2;
equallyValue.value = result;
}
else{
inputText.innerHTML=textInstruction;
firstValue.value='';
secondValue.value='';
}
}

function multiplication(){ //Умножение
inputText.innerHTML= '';
num1 = firstValue.value;
num2 = secondValue.value;
if((num1 !=='') && ( num2 !=='')&&( !isNaN(num1&&num2) )){//Защита от 0 и string
num1 = Number(num1);
num2 = Number(num2);
result = num1 * num2;
equallyValue.value = result;
}
else{
inputText.innerHTML=textInstruction;
firstValue.value='';
secondValue.value='';
}
}


function division(){ //Деление 
inputText.innerHTML= '';
num1 = firstValue.value;
num2 = secondValue.value;

if((num1 !=='') && ( num2 !=='')&&( !isNaN(num1&&num2) )){//Защита от 0 и string
num1 = Number(num1);
num2 = Number(num2);
result = num1 / num2;

if((num1 == 0) && (num2 == 0) ){
inputText.innerHTML='0 на 0 ? Нельзя!'
result='Не-а!'
equallyValue.value = result;  
}

equallyValue.value = result.toFixed(2);

if(result=='Infinity'){ //Очень ВАЖНЫЙ ВОПРОС, почему не === потому что Infinity не string ?
inputText.innerHTML='Делить на 0 ? Нельзя!'
result='Не-а!'
equallyValue.value = result;
}

}
else{
inputText.innerHTML=textInstruction;
firstValue.value='';
secondValue.value='';
}

}

function power(){//Возведение в степень
inputText.innerHTML= '';
num1 = firstValue.value;
num2 = secondValue.value;
if((num1 !=='') && ( num2 !=='')&&( !isNaN(num1&&num2) )){//Защита от 0 и string
num1 = Number(num1);
num2 = Number(num2);
result = num1 ** num2;
equallyValue.value = result;
}
else{
inputText.innerHTML=textInstruction;
firstValue.value='';
secondValue.value='';
}

if(result=='Infinity'){ //Очень ВАЖНЫЙ ВОПРОС, почему не === потому что Infinity не string ?
inputText.innerHTML='Очень большое число, прекрати, сломаешь!!!!'
result='Не-а!'
equallyValue.value = result;
}

}

function string(){//Складываем буквы
inputText.innerHTML= '';
num1 = firstValue.value;
num2 = secondValue.value;

if(isNaN(num1&&num2)){ //ТРУ, если буквы, False, если цифры в стринге
num1 = String(num1);// РАнее пытался так (typeof num1 && typeof num2 !== 'number')
num2 = String(num2);
result = num1 + num2;
equallyValue.value = result;
}

else{
inputText.innerHTML="Введите буквы или символы, но не цифры!";   
firstValue.value='';
secondValue.value='';
}

}

function clean(){
//очищение
firstValue.value = '';
secondValue.value='';
equallyValue.value = '';
inputText.innerHTML= '';

//Изменение фона
const element_contenier = document.querySelector('.contenierParents_level_1');
const element_button_color_length = document.querySelector('.keyboard_level_2').children.length-1
const element_button_color = document.querySelector('.keyboard_level_2').children[element_button_color_length];
const element_button_C_length = document.querySelector('.keyboard_level_2').children.length-3
const element_button_C=document.querySelector('.keyboard_level_2').children[element_button_C_length];

element_contenier.style.backgroundColor = "rgb(0, 135, 83)";
element_button_color.style.backgroundColor = "red";
element_button_C.style.backgroundColor = "rgb(173, 180, 234)";
}

function close_page(){
    window.close();
    
}

function color(){
//очищение
firstValue.value = '';
secondValue.value='';
equallyValue.value = '';
inputText.innerHTML= '';
//Изменение фона
const element_contenier = document.querySelector('.contenierParents_level_1');
const element_button_color_length = document.querySelector('.keyboard_level_2').children.length-1
const element_button_color = document.querySelector('.keyboard_level_2').children[element_button_color_length];
const element_button_C_length = document.querySelector('.keyboard_level_2').children.length-3
const element_button_C=document.querySelector('.keyboard_level_2').children[element_button_C_length];

element_contenier.style.backgroundColor = "red";
element_button_color.style.backgroundColor = "rgb(173, 180, 234)";
element_button_C.style.backgroundColor = "rgb(0, 135, 83)";
}





