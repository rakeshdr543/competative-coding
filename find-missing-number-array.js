function findMissingNumber(a,n){
    let total = Math.floor((n ) * (n + 1) / 2);
        for (let i = 0; i < a.length; i++)
            total -= a[i];
  return total
}
// Make a Snippet for the code above this and then write your logic in main();


function main() {
    const x = parseInt(readline());
    var nums = readline().split(" ").map(x => parseInt(x)); 

    console.log(findMissingNumber(nums,x))

}