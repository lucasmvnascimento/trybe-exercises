const express = require('express');

const { Book } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(400).json({ message: 'Usuário não encontrado' });
    res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/books', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    res.status(200).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.put('/books/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );
    if(!updateBook) res.status(400).json({ message: 'Usuário não encontrado' });
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });
    if (!deleteBook) return res.status(400).json({ message: 'Usuário não encontrado '});
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));