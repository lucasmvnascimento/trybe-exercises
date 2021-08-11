def tipo_triangulo(l1, l2, l3) :
    isTriangle = (l1 + l2 > l3) and (l1 + l3 > l2) and (l2 + l3 > l1)
    if not isTriangle : print('Nao eh Triangulo')
    elif l1 == l2 == l3 : print('Triangulo Equilatero')
    elif l1 == l2 or l2 == l3 or l1 == l3 : print('Triangulo Isosceles')
    else : print('Triangulo Escaleno')