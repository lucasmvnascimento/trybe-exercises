let n = 5;

if (n<=1) {
    console.log ("Tamanho Inválido ! N deve ser maior que 2");
} else {
    for (let i=0; i<n; i+=1){
        linha = "";
        for (let j=n-i; j>1; j-=1){
            linha = linha + " ";
        }
        for (let k=0; k<i+1; k+=1){
            linha = linha + "*";
        }
        console.log (linha)
    }
}