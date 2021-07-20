function calculateWays(n){
    let p1 = (n - 1)*(n + 4)

    let p2 = (Math.pow(n,2) - 3*n + 4)/2

return console.log(p1*p2)
}

function main() {
    const x = parseInt(readline());

for(let i=1;i<=x;i++){
    calculateWays(i)
}
}