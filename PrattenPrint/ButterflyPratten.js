let n = 5

// First Part
for(let i = 1;i<n;i++){

    for(let j = 1;j<=i;j++){
        process.stdout.write('*')
    }

    for(let k = 1;k<= (2*n-2*i)-1;k++){
        process.stdout.write(' ')
    }
    for(let j = 1;j<=i;j++){
        process.stdout.write('*')
    }
    console.log()


}

// Second Part
for(let i = 1;i<=2*n-1;i++){
    process.stdout.write('*')
}
console.log()

//Third Part

for(let i = n-1;i>=1;i--){
    for(let j = 1;j<=i;j++){
        process.stdout.write('*')
    }

    for(let k = 1;k<= (2*n-2*i)-1;k++){
        process.stdout.write(' ')
    }
    for(let j = 1;j<=i;j++){
        process.stdout.write('*')
    }
    console.log()
}