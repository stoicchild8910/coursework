//basically
async function logName() {
    const user = await fetchUser('url');
    if (user.id === 1) {
        console.log(user.name);
    }
}

/////////////////////////////////////////////////////////////////
// ex1.
function fetchItems() {
    return new Promise(function(resolve, reject) {
      var items = [1,2,3];
      resolve(items)
    });
}
  
async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems); // [1,2,3]
}


/////////////////////////////////////////////////////////////////
// ex2. 여러개의 비동기 코드를 처리해야할 때
function fetchUser() {
    var url = 'https://jsonplaceholder.typicode.com/users/1'
    return fetch(url).then(function(response) {
      return response.json();
    });
}

function fetchTodo() {
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url).then(function(response) {
        return response.json();
});
}

async function logTodoTitle() {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  }

/////////////////////////////////////////////////////////////////
// ex3. try&catch로 에러처리

async function logTodoTitle() {
    try {
      var user = await fetchUser();
      if (user.id === 1) {
        var todo = await fetchTodo();
        console.log(todo.title); // delectus aut autem
      }
    } catch (error) {
      console.log(error);
    }
  }
