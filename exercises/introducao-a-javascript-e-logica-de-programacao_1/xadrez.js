let peca = "carro";
peca = peca.toLowerCase();

switch (peca) {
    case "peao":
        console.log("frente");
        break;
    case "torre":
        console.log("frente,lado");
        break;
    case "bispo":
        console.log ("diagonal");
        break
    case "rei":
        console.log ("frente,tras,lados, diagonal");
        break;
    case "rainha":
        console.log ("frente,tras,lados,diagonal");
        break;
    default:
        console.log ("peca invalida")
        break
}