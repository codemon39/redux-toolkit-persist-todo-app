import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, checkTodo, modalVisable } from "../redux/tasksSlice";

const Table = () => {
  const data = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const taskDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const openModal = (id) => {
    dispatch(modalVisable(id));
  };
  const checkTask = (id) => {
    dispatch(checkTodo(id));
  };
  return (
    <div className="flex justify-center">
      <table className=" w-4/5 p-10 rounded-2xl">
        <tbody>
          {data?.todos.map((item, index) => (
            <tr key={item.id} className="border-b border-t hover:bg-slate-700 ">
              <td>
                <input
                  className="cursor-pointer"
                  onClick={() => checkTask(item.id)}
                  type="checkbox"
                ></input>
              </td>
              <td className="w-3/5 p-10">{item.text}</td>
              <td>
                <button
                  className="text-blue-600 hover:bg-blue-400 hover:text-white p-3  rounded-lg"
                  onClick={() => openModal(item.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="text-red-600 hover:bg-red-500 hover:text-white p-3  rounded-lg"
                  onClick={() => taskDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
