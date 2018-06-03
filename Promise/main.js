function startGame() {
  let counter = 0;

  document.querySelector('button').addEventListener('click', () => {
    ++counter;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (counter > 4) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

startGame()
  .then(() => alert('you win!'))
  .catch(() => alert('you lost'));
