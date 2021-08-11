def preco_combustivel(litros, tipo):
    if tipo == 'A' :
        if litros <= 20 :
            return litros * 1.9 * 0.97
        else : return litros * 1.9 * 0.95
    elif tipo == 'G' :
        if litros <= 20 :
            return litros * 2.5 * 0.96
        else : return litros * 2.5 * 0.94