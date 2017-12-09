export class CheckTodos {
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('no todos now you can creat !!');
            const todos = [
                {
                  text: 'todo element 1'
                },
                {
                  text: 'todo element 2'
                },
                {
                  text: 'todo element 3'
                }
              ];

              localStorage.setItem('todos', JSON.stringify(todos));
              return;
        } else {
            console.log('amazing we found todos !!');
        }
    }
}
