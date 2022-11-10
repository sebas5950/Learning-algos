//number of operation is (eventually)
//bounded by a multiple of n (say, 10n)
//O(n)
function addUpTo(n){
    let total = 0
    for(let i = 0; i<=n; i++){
        total += i;
    }
    return total
}
//always 3 operations
// O(1)
function addUpToDeff(n){
    return n * (n + 1) / 2;
}
console.log(addUpTo(2))
console.log(addUpToDeff(2))