let n = 6;
if (n % 2 === 1 || n<= 0) {
    console.log("Pattern generation is not supported for odd numbers or negative numbers.");
    return;
}



for (let i = 0; i < 2 * n; i++) {
    let pattern = "";
    
    if (i < n + 1) {
        pattern += "@";
    } else {
        pattern += " ";
    }
    
    for (let j = 0; j < n * (n - 1) + 1; j++) {
        if (i >= n / 2 && i < 2 * n - n / 2) {
            if (j < (n - 1) * Math.max(0, i - n / 2) || j > (n - 1) * Math.max(0, i - n / 2) + n - 1) {
                pattern += " ";
            } else {
                pattern += "*";
            }
        } else {
            pattern += " ";
        }
    }
    
    if (i >= n - 1) {
        pattern += "@";
    } else {
        pattern += " "; 
    }
    
    console.log(pattern);
}
