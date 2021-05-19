let n = 15;

if (n%2 === 0) {
    console.log ("Tamanho Inválido ! N deve ser um valor ímpar !");
} else {
    for (let i=1; i<=n; i+=2){
        let linha = ""; 
        if (i===1){
            let espacos = (n-1)/2;
            for (let j=0; j<espacos; j+=1){
                linha += " ";
            }
            linha +="*";
            for (let j=0; j<espacos; j+=1){
                linha += " ";
            }
        } else if (i===n){
            for (let j=0; j<n; j+=1){
                linha += "*";
            }
        } else {
            let espacosFora = (n-i)/2;
            let espacosDentro = n-2-2*espacosFora;
            for (let j=0; j<espacosFora; j+=1){
                linha += " ";
            }
            linha += "*";
            for (let j=0; j<espacosDentro; j+=1){
                linha += " ";
            }
            linha += "*";
            for (let j=0; j<espacosFora; j+=1){
                linha += " ";
            }

        }
        console.log (linha)
    }
}