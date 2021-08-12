import json, csv

with open('books.json') as books_file :
    books = json.load(books_file)

books_by_categories = {}
for book in books:
    for category in book['categories'] :
        if not books_by_categories.get(category):
            books_by_categories[category] = 0
        books_by_categories[category] += 1

with open('books.csv', 'w') as books_csv:
    writer = csv.writer(books_csv)
    headers = ['categoria', 'porcentagem']
    writer.writerow(headers)
    for category in books_by_categories:
        percentage = round((int(books_by_categories[category])/len(books)) * 100, 3)
        writer.writerow([category, percentage])
