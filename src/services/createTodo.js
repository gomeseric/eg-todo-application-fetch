export async function createTodo (user, task) {
    const todo = {
        label: task,
        is_done: false,
    };

    await fetch({
        url: `https://playground.4geeks.com/todo/users/${user}`,
        method: 'POST',
        headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify(todo)
    });
}