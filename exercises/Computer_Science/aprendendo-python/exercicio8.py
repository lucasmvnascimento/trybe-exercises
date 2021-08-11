def triangulo_asteriscos(n):
    inicioLinha = n
    while inicioLinha > 0:
        inicioColuna = 0
        while inicioColuna < n - inicioLinha + 1:
            inicioColuna += 1
            if inicioColuna < n - inicioLinha + 1: print('*', end='')
            else : print('*')
        inicioLinha -= 1

# SOLUCAO GABARITO
def draw_triangle(n) :
    for row in range(n + 1) :
        print(row * '*')