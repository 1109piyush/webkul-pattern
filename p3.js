let n = 7;
let string = "";

for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        if ( i < n / 2 && j < n - i ||i > n / 2 && j <= i || i === n / 2) {
            string += " ";
        } else {
            string += "*";
        }
    }
    string += "\n"; 
}

console.log(string);
