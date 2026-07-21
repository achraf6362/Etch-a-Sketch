let grid = document.querySelector('#grid');
let change = document.querySelector('#change');
let clear = document.querySelector('#clear');
let gridSize = 16;

function play() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let child = document.createElement('div');
    child.classList.add('child');
    grid.appendChild(child);
  }
}

function playAgain() {
  let num = +prompt('Enter a number:', 16);

  if (num > 100) {
    num = 100;
  } else if (num < 2) {
    num = 2;
  }

  gridSize = num;
  document.documentElement.style.setProperty('--grid-size', num);
  grid.innerHTML = '';

  play();
}

const getRandomInt = () => Math.floor(Math.random() * 256);

function randomColor() {
  return `rgb(${getRandomInt()} ${getRandomInt()} ${getRandomInt()})`;
}

/* function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r} ${g} ${b})`
} */

/* [...grid.children].forEach(child => {
  child.addEventListener('mouseenter', (e) => {
    let current = e.currentTarget;
    current.classList.add('hovered');
  });
}); */  

grid.addEventListener('mouseover', (e) => {
  if (e.target !== grid) {
    e.target.classList.add('hovered');
    // document.documentElement.style.setProperty('--random-color', randomColor());
    e.target.style.backgroundColor = randomColor();

    if (e.target.style.opacity < 1) {
      e.target.style.opacity = +e.target.style.opacity + 0.1;
    }
  }
});

change.addEventListener('click', playAgain);

clear.addEventListener('click', () => {
  [...grid.children].forEach(child => {
    child.classList.remove('hovered');
    child.style.backgroundColor = '';
    child.style.opacity = '';
  });
});

play();