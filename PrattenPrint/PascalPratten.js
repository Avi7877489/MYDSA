function PascalPratten(n){


for(let i = 1;i<=n;i++){

  for(j = 1;j<=n-i;j++){
    process.stdout.write(' ')
  }
  
  for(let k = 1;k<=i;k++){
    process.stdout.write('*' + ' ')
  }
  
  console.log()
}
}

PascalPratten(5)