let grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
  let child = document.createElement('div');
  child.classList.add('child');
  grid.appendChild(child);
}