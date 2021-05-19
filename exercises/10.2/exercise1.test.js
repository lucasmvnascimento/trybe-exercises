const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test ('Testa conversão de letras minúsculas para maiúsculas', (done) => {
  const callback = (data) => {
    expect(data).toBe('LUCAS NASCIMENTO')
    done();
  }
  uppercase('lucas nascimento' , callback);
});