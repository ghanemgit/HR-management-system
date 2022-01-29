'use strict';


let drinksForm = document.getElementById('drinkForm');
let dinksSection = document.getElementById('drinks');
let allDrinks = [];
checkLocalAndPush();

function Drink(nameValue, ingredients, cold, hot) {
    this.name = nameValue;
    this.ingredients = ingredients; // it's an array 
    this.imagePath = `./images/${this.name}.PNG`;
    this.isCold = cold;
    this.isHot = hot;
    this.price = 0;
}

Drink.prototype.calculatePrice = function () {
    this.price = getRandomNumber(1, 50);
}

function render(drinksFromLS) {
    dinksSection.innerHTML = '';
    for (let i = 0; i < drinksFromLS.length; i++) {
        //    let drink = drinksFromLS[i];

        let div = document.createElement('div');
        dinksSection.appendChild(div);

        let h4 = document.createElement('h4');
        div.appendChild(h4);
        // h4.textContent = drink.name;
        h4.textContent = drinksFromLS[i].name;

        let p = document.createElement('p');
        div.appendChild(p);
        if (drinksFromLS[i].isCold && drinksFromLS[i].isHot) {
            p.textContent = `${drinksFromLS[i].name} is available Hot and Cold and it has the following ingredients : `
        } else if (drinksFromLS[i].isCold) {
            p.textContent = `${drinksFromLS[i].name} is available Cold and it has the following ingredients : `
        } else if (drinksFromLS[i].isHot) {
            p.textContent = `${drinksFromLS[i].name} is available Hot and it has the following ingredients : `
        }

        let ul = document.createElement('ul');
        div.appendChild(ul);
        // console.log(drinksFromLS[i].ingredients);
        for (let j = 0; j < drinksFromLS[i].ingredients.length; j++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = drinksFromLS[i].ingredients[j];
        }


        let img = document.createElement('img');
        div.appendChild(img);
        img.setAttribute('src', drinksFromLS[i].imagePath);
        img.setAttribute('alt', drinksFromLS[i].name);

        let p2 = document.createElement('p');
        div.appendChild(p2);
        p2.textContent = `price : ${drinksFromLS[i].price}`;

    }

}



function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let ingredientsString = event.target.ingredients.value;
    let ingredientsArr = ingredientsString.split(',');
    let isCold = event.target.isCold.checked;
    let isHot = event.target.isHot.checked;

    let newDrink = new Drink(name, ingredientsArr, isCold, isHot);
    newDrink.calculatePrice();

    allDrinks.push(newDrink);

    let jsonArr = toJSON();

    saveToLocalS(jsonArr);

    render(readFromLocalS());
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkLocalAndPush() {
    if (allDrinks.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allDrinks = arr;
        }
    }
}



function readFromLocalS() {
    let jsonArr = localStorage.getItem('drinks');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}

function toJSON() {
    let jsonArray = JSON.stringify(allDrinks);
    return jsonArray;
}


function saveToLocalS(jsonArray) {
    localStorage.setItem('drinks', jsonArray)
}

render(readFromLocalS());


drinksForm.addEventListener('submit', handelSubmit);







