// fror programize

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pattern(n) {
  let p = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      p += "*";
    }
    p += "\n";
  }
  console.log(p);
}


process.stdin.on('data', (data) => {
  const n = parseInt(data.toString().trim());
  if (!isNaN(n)) {
    pattern(n);
    rl.close();
  } else {
    console.log('Invalid input. Please enter a valid number.');
    console.log('Enter the number of rows for the pattern: ');
  }
});
