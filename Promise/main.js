let counter = 0;

document.querySelector('button').addEventListener('click', () => {
  ++counter;
});

setTimeout(() => {
  if (counter > 4) {
    alert('more than 4');
  } else {
    alert('less than 4');
  }
}, 2000);
