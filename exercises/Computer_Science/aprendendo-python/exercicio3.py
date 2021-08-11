def quadrado_asteriscos(n):
    inicioLinha = 0
    while inicioLinha < n:
        inicioColuna = 0
        while inicioColuna < n:
            inicioColuna += 1
            if inicioColuna < n: print('*', end='')
            else : print('*')
        inicioLinha += 1

# SOLUCAO GABARITO
def draw_square(n) :
    for row in range(n) :
        print(n * '*')