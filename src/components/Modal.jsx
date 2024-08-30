import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, modalVisable } from "../redux/tasksSlice";

const Modal = () => {
  const data = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const item = data.todos.filter((item) => item.id === data.modalState);

  useEffect(() => {
    setInputValue(item[0]?.text);
  }, [data]);
  const addTask = () => {
    dispatch(addTodo(inputValue));
    dispatch(modalVisable());
    setInputValue("");
  };
  const editTask = () => {
    dispatch(editTodo({ text: inputValue, id: data.modalState }));
    dispatch(modalVisable());
    setInputValue("");
  };
  const modalClose = () => {
    dispatch(modalVisable());
    setInputValue("");
  };
  return (
    <>
      <div
        className={`${
          data.modal === true ? "block" : "hidden"
        } w-3/5 fixed bg-slate-400 mt-20 pr-6 rounded-3xl`}
      >
        <span
          className=" hover:text-gray-700 text-3xl float-right cursor-pointer p-3"
          onClick={modalClose}
        >
          &times;
        </span>
        <div className="p-16 justify-center flex">
          <textarea
            className="w-4/5"
            placeholder="Enter content"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button
          className="p-3 hover:bg-green-400 bg-green-600 m-3 rounded-lg"
          onClick={data.modalState === undefined ? addTask : editTask}
          // onClick={editTask}
        >
          {data.modalState === undefined ? "ADD" : "EDIT"}
        </button>
      </div>
    </>
  );
};

export default Modal;
