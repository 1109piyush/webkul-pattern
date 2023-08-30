let n = 5;
let string = "";
// External loop
for (let i = 0; i <= n/2+1; i++) {
  // printing spaces
  for (let j = 0; j <= n/2 - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 0; i <= n/2; i++) {
  // printing spaces
 string += "1";
 for (let j = 0; j <= n/2; j++) {
   string+= " "
  }
  string += "1";

  
  string += "\n";
}

for (let i = 0; i < n/2; i++) {
  // printing spaces
  string += "@";
  
  
  string += "\n";
}


console.log(string);