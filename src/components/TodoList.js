"use client";

import { deleteTodo } from "@/services/deleteTodo";
import { getTodos } from "@/services/getTodos";
import { useEffect, useState } from "react";

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    useEffect(() => {
        const fn = async () => {
            const data = await getTodos("gomeseric");
            setTodos(data);
        };
        fn();
    }, []);

    const handleChangeTask = (ev) => {
        setTask(ev.target.value);
    };

    const handleEnter = async (ev) => {
        if (ev.key === "Enter" && task.trim() !== "") {
            const newTodo = await createTodo(user, task.trim());
            if (newTodo) {
            setTodos([...todos, newTodo]);
            setTask("");
            }
        }
    };

    const handleDelete = (index) => {
        const todo = todos[index];
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
        deleteTodo(todo.id);
    };

    return (
        <div className="w-2/12 mx-auto">
          <input
            className="border"
            value={task}
            onChange={handleChangeTask}
            onKeyDown={handleEnter}
          />
    
          <ul className="w-full">
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center justify-between">
                <div>{todo.label}</div>
    
                <button
                  onClick={() => handleDelete(index)}
                  className="px-1 bg-red-400 hover:bg-red-700 text-white text-xs rounded-lg"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
    
          <div>
            {todos.length > 0 ? (
              <span>{todos.length} items left</span>
            ) : (
              <span>No items left</span>
            )}
          </div>
        </div>
      );
    }