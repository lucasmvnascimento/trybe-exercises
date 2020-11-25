let custo = 2500;
let venda = 3200;
let custoCimposto = 1.2*custo;

let lucro = (venda - custoCimposto)*1000;
if (custo<0 || venda<0) {
    console.log ("erro");
} else {
    console.log (lucro);
}