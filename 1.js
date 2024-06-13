// Write a Javascript function to check if a given number is prime
function isPrime(n) {
    if(n<=1){
        return 'not a prime'
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return 'Not a prime'
        }
        return 'prime no'
    }
}
 
n=10
console.log(`Check if ${n} is ${isPrime(n)} `);