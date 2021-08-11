CREATE SCHEMA IF NOT EXISTS catalogo_albuns;
USE catalogo_albuns;

CREATE TABLE artistas(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50)
);

CREATE TABLE estilo_musical (
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50)
);

CREATE TABLE albuns (
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  artista_id INT,
  titulo VARCHAR(50),
  preco DOUBLE,
  estilo_id INT,
  FOREIGN KEY (artista_id) REFERENCES artistas (artista_id),
  FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id)
);

CREATE TABLE musicas (
  musica_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  album_id INT,
  FOREIGN KEY (album_id) REFERENCES albuns (album_id)
);

SELECT * FROM artistas;
SELECT * FROM estilo_musical;
SELECT * FROM albuns;
SELECT * FROM musicas;