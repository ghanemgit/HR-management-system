'use strict';

let form = document.getElementById('form');
let div = document.getElementById('addedNames');

// 1- Global array to save all the objects (all the users)
let users = [];
checkLocalAndPush();

function handleSubmit(event) {
    event.preventDefault();
    let userName = event.target.name.value;
    let userAge = event.target.age.value;

    let userObj = { name: userName, age: userAge }

    // 2- after reading the data from the form we push it to the array 
    users.push(userObj);

    // 3- converting the array to a JSON format 
    let jsonArray = toJSON();

    //    4- save the converted array to the local storage
    saveToLocalS(jsonArray);

    //    5- call the render function
    render(readFromLocalS());
}

function toJSON() {
    let jsonArray = JSON.stringify(users);
    // console.log(jsonArray);
    return jsonArray;
}

function saveToLocalS(jsonArray) {
    // setItem('key',value(the convertd array))

    localStorage.setItem('allUsers', jsonArray)

    // [0:{name: 'latte', age: '10'}    1: {name: 'ahmad', age: '23'}]

}

function readFromLocalS() {
    let jsonArr = localStorage.getItem('allUsers');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
    // console.log(jsonArr);
    // console.log(arr);

}

function render(arr) {

    // [0:{name: 'latte', age: '10'}    1: {name: 'ahmad', age: '23'}]
    div.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let p = document.createElement('p');
        div.appendChild(p);
        p.textContent = arr[i].name + " " + arr[i].age;
    }
}


function checkLocalAndPush() {
    if (users.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            users = arr;
        }
    }
}

render(readFromLocalS());




form.addEventListener('submit', handleSubmit)


