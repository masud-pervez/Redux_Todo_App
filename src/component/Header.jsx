import React, { useState } from "react";
import noteImage from "../assets/images/notes.png";
import dobleClickImgae from "../assets/images/double-tick.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../redux/todos/action";
import addTodo from "../redux/todos/thunk/addTodos";
import updateAllStatus from "../redux/todos/thunk/updateAllStatus";

export default function Header() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    value !== "" && dispatch(addTodo(value));
    setValue("");
  };

  const handleComplete = () => {
    dispatch(updateAllStatus());
  };
  const handleClearComplete = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          onChange={handleInput}
          value={value}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')]  bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={dobleClickImgae} alt="Complete" />
          <span onClick={handleComplete}>Complete All Tasks</span>
        </li>
        <li onClick={handleClearComplete} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
}
