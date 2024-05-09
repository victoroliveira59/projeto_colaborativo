numerosDaSorte = [37, 14, 26, 5, 94, 87]  


for(let i = 0;i < numerosDaSorte.length; i++){
  let x = numerosDaSorte[i]
  if(x < 50 && (x % 2 == 0)){
    console.log("X é par e menor que 50")
  } else if (x < 50) {
    console.log("X é menor que 50")
  } else{
    console.log("X é maior que 50")
  }
}