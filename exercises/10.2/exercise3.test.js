const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  test('Verifica existencia de usuario com id 4 (Async/Await)', async () => {
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  })

  test('Verifica existencia de usuario com id 1 (Async/Await)', async () => {
    try {
      const user = await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + '1' + ' not found.' })
    }
  })