function generatePattern(n) {
    if (n <= 1 || n % 2 !== 0) {
        console.log("Pattern not applicable for this number.");
        return;
    }
  
    let x = 0;
    let p = "";
    
    for (let i = 0; i < 2 * n; i++) {
        if (i < n + 1) {
            p += "@";
        } else {
            p += " ";
        }
        
        for (let j = 0; j < n * (n - 1) + 1; j++) {
            if (i >= n / 2 && i < 2 * n - n / 2 && j >= (n - 1) * x && j <= (n - 1) * x + n - 1) {
                p += "*";
            } else {
                p += " ";
            }
        }
        
        if (i >= n - 1) {
            p += "@";
        } else {
            p += " ";
        }
        
        if (i >= n / 2 && i < 2 * n - n / 2) {
            x++;
        }
        
        p += "\n";
    }

    return p;
}

// Replace this with any even number (excluding 1 and negative numbers)
console.log(generatePattern(6));
