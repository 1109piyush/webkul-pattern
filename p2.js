// JavaScript implementation

// Define the pattern
function createPattern(n) {
    let pattern = '';

    for (let i = 0; i < (n / 2) + 2; i++) {
        for (let j = 0; j < n - i; j++) {
            pattern += ' ';
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            pattern += '@';
        }
        pattern += '\n';
    }

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < (n / 2) + 1; j++) {
            if (j >= Math.floor(n / 2) - i && j >= i - Math.floor(n / 2)) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        for (let j = 0; j < n; j++) {
            if (i === Math.floor(n / 2)) {
                pattern += '@';
            } else {
                pattern += ' ';
            }
        }
        for (let j = 0; j < (n / 2) + 1; j++) {
            if (j >= Math.floor(n / 2) - i && j >= i - Math.floor(n / 2)) {
                pattern += '*';
            }
        }
        pattern += '\n';
    }

    return pattern;
}

// Driver code
function main() {
    const n =5;
    const pattern = createPattern(n);
    console.log(pattern);
}

main();
