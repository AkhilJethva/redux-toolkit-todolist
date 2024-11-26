import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/slice/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos);
  console.log(state);
  return (
    <div>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todo List</button>
      Hello
    </div>
  );
};

export default TodoList;
