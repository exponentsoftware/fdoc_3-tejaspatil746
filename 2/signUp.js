const users = [
    {
            _id: 'ab12ex',
            username: 'User1',
            email: 'user1@mail.com',
            password: '123123',
            createdAt:'05/05/2022 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'User2',
            email: 'user2@mail.com',
            password: '123123',
            createdAt:'05/05/2022 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'User3',
            email: 'user3@mail.com',
            password: '123123',
            createdAt:'05/05/2022 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'User4',
            email: 'user4@mail.com',
            password: '123123',
            createdAt:'05/05/2022 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'User5',
            email: 'user5@mail.com',
            password: '123123',
            createdAt:'05/05/2022 10:00 AM',
            isLoggedIn: false
    }
    ];

    const newUser = {
        username: 'User6',
        email: 'user6@mail.com',
        password: '123456',
      };
      function signUp (arr, newUser) {
        for (const user of arr) {
          if (user['username'] === newUser.name) {
            return ' already an account';
          }
        }
        arr.push(newUser);
        return arr;
      };
      console.log(signUp(users, newUser));
    