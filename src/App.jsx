import "./App.css";
import { Provider } from "react-redux";
import TodoList from "./pages/TodoList.jsx";
import { store, persistor } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoList />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
