"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function createUser(user) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(user) 
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}

// Приклад використання
createUser({name: "Sam", email: "fjsnfkjns2342@gmail.com"})
  

module.exports = createUser;
