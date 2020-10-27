let n = 9;

if (n%2 === 0) {
    console.log ("Tamanho Inválido ! N deve ser um valor ímpar !");
} else {
    for (let i=1; i<=n; i+=2){
        var espacos = (n-i)/2;
        var linha = ""; 
        for (let j=0; j<espacos; j+=1){
            linha = linha + " ";
        }
        for (var k=0; k<i; k+=1){
            linha = linha + "*";
        }
        for (let l=0; l<espacos; l+=1){
            linha = linha + " ";
        }
        console.log (linha);
    }
}