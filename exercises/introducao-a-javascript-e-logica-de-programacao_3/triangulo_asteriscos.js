let n = 3;

if (n<=1) {
    console.log ("Tamanho Inválido ! N deve ser maior que 2");
} else {
    for (let i=0; i<n; i+=1){
        let linha = "";
        for (let j=0; j<i+1; j+=1){
            linha = linha + "*";
        }
        console.log (linha)
    }
}