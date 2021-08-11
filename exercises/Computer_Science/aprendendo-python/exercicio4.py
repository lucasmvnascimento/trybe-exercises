def maior_nome(listaDeNomes) :
    maiorNome = listaDeNomes[0]
    for nome in listaDeNomes :
        if len(nome) > len(maiorNome) : maiorNome = nome
    return maiorNome
