// -------------------------- Home work 4 --------------------------
// -------------------------- Кириченко Игорь --------------------------
//1

function multiply() {
	let sum = 1;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments.length === 0 || typeof arguments[i] !== 'number') {return console.log('Ошибка, Введите число');}
		sum *= arguments[i];
	}
	console.log(sum);

}
multiply( 3, 4, 2);


//2

function reverseString(str) {
	let newStr = '';
	if(!(typeof str === 'string')) { return console.log('Ошибка, Введите строку') }
	for(let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	console.log(newStr)
}

reverseString('qwerty');

//3

function getCodeSytingFromText(str) {
	if(!(typeof str === 'string')) {return console.log('Ошибка, Введите строку')}
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		
		newStr += str.charCodeAt(i) + ' ';
	}
	return console.log(newStr);

}
getCodeSytingFromText('hello')

//4

function game(number) {
	if (number.length === 0 || typeof number !== 'number') {return console.log('Ошибка, Введите число');}
		let numberRand;
		numberRand = Math.ceil(Math.random() * 10);
		if(numberRand === number){
			return console.log('Вы выиграли')
		} else {
			return console.log(`Вы не угадали ваше число ${number} а выпало число ${numberRand}`)
		}
}

game(2);

//5 

function getArray (n) {
	if(!(typeof n === 'number')) {return console.log('Ошибка, Введите число')}
	let arr = [];
	for (let i = 1; i <= n; i++){
		arr.push(i);
		
	}
	console.log(arr);
}
   
   getArray(10);
   
// 6

function doubleArray3(arr) {
	arr = arr.concat(arr);
	return console.log(arr)
 }
 doubleArray3([1, 2, 3])

//7
  function changeCollection() {
	  let arr = [];
	for (let i = 0; i < arguments.length; i++) {
		if (!Array.isArray(arguments[i])) { return console.log('Ошибка, Введите массив')};
		arr.push(arguments[i].splice(1));
	 }
	 console.log(arr);
  }

  changeCollection([1, 2, 3], ['a', 'b', 'c'], [1, 4, 'dfsfas', 124]);

//8
let users = [
    {
        name  : 'Ivan',
        age   : 28,
        gender: 'male'
    },
    {
        name  : 'Petr',
        age   : 29,
        gender: 'male'
    },
    {
        name  : 'Adelina',
        age   : 30,
        gender: 'female'
    },
    {
        name  : 'Patricia',
        age   : 25,
        gender: 'female'
    }
 ];

 function funcGetUsers (arr, field, argument) {
    if (arr.length === 0 || !field || !argument) {
		return 'Ошибка, заданны не все параметры';
    }
    let usersResult = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][field] === argument) {
            usersResult.push(arr[i]);
        }
    }

    return console.log(usersResult);
}
funcGetUsers(users, 'gender', 'female')



// Функции высшего порядка


function getStringUppercase(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
    return newArr.join('');
}

function getStringMultiplyed(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] * 10);
	}
	return newArr.join(', ');
}


function getStringOfArray(arrObj) {
	let newArr = [];
	for (let value of arrObj) {
		newArr.push(`${value.name} is ${value.age}`);
	}
	return newArr.join(', ');	}

function getReverseArray(arrStr) {
	let newArr = [];
	for (let i = 0; i < arrStr.length; i++) {
	newArr.push(arrStr[i].split('').reverse().join(''))
	}
	return newArr.join(', ')
}	

function processData (arr, func) {
	return 'New value: ' + func(arr);
}
	

// Задаём строки


let str = ['my', 'name', 'is', 'Trinity'];
let arrNum = [10, 20, 30];
let arrObj = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
let arrReverse = ['abc', '123'];
	

//Проверка


processData(str, getStringUppercase);
processData(arrNum, getStringMultiplyed);
processData(arrObj, getStringOfArray);
processData(arrReverse, getReverseArray);