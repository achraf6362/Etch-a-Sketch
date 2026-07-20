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
  document.documentElement.style.setProperty('--grid-size', num)
  grid.innerHTML = '';

  play();
}

/* [...grid.children].forEach(child => {
  child.addEventListener('mouseenter', (e) => {
    let current = e.currentTarget;
    current.classList.add('hovered');
  });
}); */  

grid.addEventListener('mouseover', (e) => {
  if (e.target !== grid) {
  e.target.classList.add('hovered');
  }
});

change.addEventListener('click', playAgain);

clear.addEventListener('click', () => {
  [...grid.children].forEach(child => {
    child.classList.remove('hovered');
  });
});

play();