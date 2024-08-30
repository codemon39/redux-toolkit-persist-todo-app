import React from "react";
import Table from "../components/Table.jsx";
import Modal from "../components/Modal.jsx";
import { useDispatch } from "react-redux";
import { modalVisable } from "../redux/tasksSlice.js";
const TodoList = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modalVisable());
  };
  return (
    <>
      <div className="text-3xl">TO DO LIST</div>
      <Table />
      <div>
        <button
          type="button"
          onClick={openModal}
          class="text-gray-900 mt-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Add Task
        </button>
      </div>
      <Modal />
    </>
  );
};

export default TodoList;
