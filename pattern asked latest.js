// j<n- (2*i)

let n = 5
let p =""
for (let i = 0;i < n;i++) {
    for(let j =0; j <n/2+i;j++) {
        p+= " "

    }
    for(let j =0; j <n-(2*i);j++) {
        p+= "*"

    }
    p+= "\n"

}
console.log(p)