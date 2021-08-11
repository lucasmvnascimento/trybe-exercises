from math import ceil

def tinta_necessaria(tamanhoParede):
    litrosNecessarios = ceil(tamanhoParede / 3)
    latasNecessarias = ceil(litrosNecessarios / 18)
    return (latasNecessarias, latasNecessarias * 80)