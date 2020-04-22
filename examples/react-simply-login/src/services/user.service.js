

export const userService = {
  login,
  logout,
};

async function login() {
  // using fake data as user's data
  // https://jsonplaceholder.typicode.com/
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
    let message;
    if (!window.navigator.onLine) {
      message = '沒有網路，請稍後再試';
    } else {
      message = error.message;
    }
    
    return { message };
  }
}

function logout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({});
    }, 2000);
  });
}