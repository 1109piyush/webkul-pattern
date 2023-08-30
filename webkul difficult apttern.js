let n = 5
if (n % 2 === 0 || n<= 0) {
    console.log("Pattern generation is not supported for odd numbers or negative numbers.");
    return;
}
let p = ""
for (let i = 0; i <= n / 2 + 1; i++) {
    for (let j = 0; j < n + n / 2 - i; j++) {
        p += " "
    }
    for (let j = 0; j < 2 * i - 1; j++) {

        p += "*"
    }
    p += "\n"
}
for (let i = 0; i <= n - 2; i++) {
    for (let j = 0; j < n; j++) {
        p += " "
    }
    p += "@"
    for (let j = 0; j < n - 2; j++) {
        p += " "
    }
    p += "@"

    p += "\n"
}
for (let i = 0; i <= n / 2 + 1; i++) {
    for (let j = 0; j < i; j++) {
        p += " "


    }
    for (let j = 0; j < n - (i * 2); j++) {
        p += "*"
    }
    if (i == 0) {
        p += "@"
        for (let j = 0; j < n -2; j++) {
            p += " "
        }
        p += "@"
        for (let j = 0; j < n; j++) {
            p += "*"
        }
    }
    else {
        
    }
    
    p += "\n"
}







console.log(p)
