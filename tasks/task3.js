"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function updateUser(id, updatedData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PATCH', // HTTP method for partial update
      headers: {
        'Content-Type': 'application/json' // Set content type to JSON
      },
      body: JSON.stringify(updatedData) // Pass updated data as JSON
    });

    // Wait for the response to be parsed as JSON
    const data = await response.json();

    // Return the updated user data
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
}

console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;
