import random

random_word = random.choice(['Pagode', 'Cerveja', 'Barzinho']).upper()
scrambled_word = "".join(random.sample(random_word, len(random_word)))

attempts = 0

while attempts < 3 :
    print(f"{attempts + 1} TENTATIVA")
    print(scrambled_word)
    guess = input("Qual é a palavra ? : ")
    if guess.upper() == random_word :
        print('VOCE ACERTOU :) !')
        break
    else : 
        print('VOCE ERROU :(')
        attempts += 1
