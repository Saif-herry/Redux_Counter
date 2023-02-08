import './App.css';
import Counter from './Component/Counter';
import Todo from './Component/Todo';
import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Basic SetUp </h1>
      <Counter/>
      <Todo/>
      <TodoList/>
    </div>
  );
}

export default App;
