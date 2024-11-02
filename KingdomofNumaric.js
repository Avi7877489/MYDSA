function fun(n){
    let narr = []
    for(let i = 1;i<=n;i++){
        if(n%i===0){
        narr.push(i)
        }
    }
    console.log(narr.join())
}

fun(5)