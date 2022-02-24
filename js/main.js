


// inizializzo la variabile cell 
const cells = document.getElementById('for-cells');

// ciclo for per 100 volte

/* 
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('cell', 'm-3')
        newDiv.innerHTML = `FizzBuzz`;
        cells.append(newDiv);
        console.log(`FizzBuzz`);

    } else if (i % 3 == 0) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('cell', 'm-3')
        newDiv.innerHTML = `Fizz`;
        cells.append(newDiv);
        console.log(`Fizz`);
    } else if (i % 5 == 0) {
        console.log(`Buzz`);
        let newDiv = document.createElement('div');
        newDiv.classList.add('cell', 'm-3')
        newDiv.innerHTML = `Buzz`;
        cells.append(newDiv);
    } else {
        let newDiv = document.createElement('div');
        newDiv.classList.add('cell', 'm-3')
        newDiv.innerHTML = i;
        cells.append(newDiv);
    }
} */

function fizzOrBuzz() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 ==0) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell', 'm-3')
            newDiv.innerHTML = `FizzBuzz`;
            cells.append(newDiv);
            console.log(`FizzBuzz`);
    
        } else if (i % 3 == 0) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell', 'm-3')
            newDiv.innerHTML = `Fizz`;
            cells.append(newDiv);
            console.log(`Fizz`);
        } else if (i % 5 == 0) {
            console.log(`Buzz`);
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell', 'm-3')
            newDiv.innerHTML = `Buzz`;
            cells.append(newDiv);
        } else {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell', 'm-3')
            newDiv.innerHTML = i;
            cells.append(newDiv);
        }
    }
}

document.querySelector('button').addEventListener(`click`, fizzOrBuzz);




