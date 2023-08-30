let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j <= n - 2; j++) {
    string += " ";
  }
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing stars
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  for (let j = 0; j < i; j++) {
    // printing @ symbol if i is equal to (n+1)/2 (middle row)
    if (i === n) {
      string += "@";
    }
    else {
      string+=" "
    }
  }
  string += "\n";
}
for (let i = 1; i <= n-1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing stars
  for (let j = 0; j < n-i; j++) {
    string += "*";
  }

  
  
  string += "\n";
}

console.log(string);
