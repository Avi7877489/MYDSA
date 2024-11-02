function digitDominator(n){
    let Dominator = 0
    while(n>0){
        let digit = n % 10
        if(digit > Dominator){
            Dominator = digit
        }
        n = Math.floor(n/10)

    }
    console.log(Dominator)
}
let num1 = 4839

digitDominator(num1)