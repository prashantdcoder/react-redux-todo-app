import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <ToolBar/>
      <TodoList />
    </div>
  );
}

export default App;
