function divisorDetective(n){
    let divisor = []
    for(let i = 1;i<=n;i++){
        if(n%i === 0){
            divisor.push(i)
        }
    }
    let sum = divisor.reduce((ace,cur) => ace + cur,0)
    console.log(sum)

}

let nn = 12
divisorDetective(nn)