import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    modal: false,
    modalState: "",
  },
  reducers: {
    modalVisable: (state, action) => {
      console.log(action);
      const modal = state.modal;
      state.modal = !modal;
      state.modalState = action.payload;
    },

    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        check: false,
      };
      state.todos.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      console.log(action);
      let { todos } = state;
      state.todos = todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    checkTodo: (state, action) => {
      let { todos } = state;
      state.todos = todos.map((item) =>
        item.id === action.payload ? { ...item, check: !item.check } : item
      );
    },
  },
});

export const { addTodo, modalVisable, deleteTodo, editTodo, checkTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
