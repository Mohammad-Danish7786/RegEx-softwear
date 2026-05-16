function TodoForm({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: inputText,
        completed: false,
      },
    ]);

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputHandler}
      />

      <button className="todo-button" onClick={submitTodoHandler}>
        Add
      </button>

      <div className="select">
        <select onChange={statusHandler} className="filter-todo">
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Uncomplete">Uncomplete</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;