import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/slice/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log(state);
  return (
    <div className="container">
      <h3 className="todo_header">To Do List</h3>
      <div className="table-wrapper">
        <table className="todo_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {state.isLoading && <tr>Loading...</tr>}
            {state.isError && <tr>Error fetching data</tr>}
            {state != null && state.data != null
              ? state.data.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td
                      className={
                        todo.completed == true ? "todo_green" : "todo_red"
                      }
                    >
                      {todo.completed.toString()}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
