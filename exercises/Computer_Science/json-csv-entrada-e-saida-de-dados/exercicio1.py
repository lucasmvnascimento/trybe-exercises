def nome_escada_invertida (nome) :
    for index in range(len(nome)):
        print(nome[0: len(nome) - index])

if __name__ == "__main__":
    name = input("Digite um nome: ")
    nome_escada_invertida(name)