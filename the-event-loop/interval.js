let count = 3;

const countdown = () => {
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(id);
  } else {
    console.log(count);
    count--;
  }
};

const id = setInterval(countdown, 1000);
