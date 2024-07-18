export async function createTodo (user, task) {
    const todo = {
        label: task,
        is_done: false,
    };

  const response = await fetch({
        url: `https://playground.4geeks.com/todo/users/${user}`,
        method: 'POST',
        headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify(todo)
    });

    if (response.status === 201) {
        const data = await response.json();
        return data;
    }
    return null;
}