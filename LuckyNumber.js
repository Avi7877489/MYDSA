let n = 54
// let islucky = false

// while(n>0){
//     let digit = n % 10
//     if(digit === 4 || digit === 7){
//         islucky = true
//         break
//     }
//     n = Math.floor(n / 10)
// }

// if(islucky){
//     console.log("Lucky")
// }else{
//     console.log("Not Lucky")
// }

// second Process

function fun(n){

    let nstr = n.toString()

    if(nstr.includes('4') || nstr.includes('7')){
        console.log("Lucky")
    }else{
        console.log("Not Lucky")
    }
}
fun(n)