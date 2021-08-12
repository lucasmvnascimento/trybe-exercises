import random

with open('game_words.txt', mode='r') as game_words_file:
    words_list = game_words_file.read().split()

random_word = random.choice(words_list).upper()
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