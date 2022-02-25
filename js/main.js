
const cells = document.getElementById('for-cells');
function fizzOrBuzz() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 ==0) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell', 'm-3')
            newDiv.innerHTML = "<img src=\"img/game-of-thrones-fan-contrariati-sviluppi-tormund-brienne-v3-376256.jpg\" width=\"200px\" height=\"200px\">";
            cells.append(newDiv);
            console.log(`FizzBuzz`);
    
        } else if (i % 3 == 0) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell', 'm-3')
            newDiv.innerHTML = "<img src=\"img/Fizz_0.jpg\" width=\"200px\" height=\"200px\">";
            cells.append(newDiv);
            console.log(`Fizz`);
        } else if (i % 5 == 0) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell', 'm-3')
            newDiv.innerHTML ="<img src=\"img/Utilitybeltbuzztoystory2.JPG.webp\" width=\"200px\" height=\"200px\">";
            cells.append(newDiv);
            console.log(`Buzz`);
        } else {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell', 'm-3')
            newDiv.innerHTML = i;
            cells.append(newDiv);
            console.log(i);
        }
    }
}

document.querySelector('button').addEventListener(`click`, fizzOrBuzz);


