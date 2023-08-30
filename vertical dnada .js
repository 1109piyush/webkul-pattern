let n = 5;
let string = "";

for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n; j++) {
        string+=" ";
    }
    string += "@";
    
    for (let j = 0; j < n - 2; j++) {
        string += " ";
    }
    string += "@";
    string += "\n"
}


console.log(string)