import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;
