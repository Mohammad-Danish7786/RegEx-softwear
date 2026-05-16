function TodoItem({ todo, todos, setTodos }) {
  // Delete todo
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // Complete todo
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{todo.text}</li>

      <button className="complete-btn" onClick={completeHandler}>
        ✔
      </button>

      <button className="trash-btn" onClick={deleteHandler}>
        🗑
      </button>
    </div>
  );
}

export default TodoItem;