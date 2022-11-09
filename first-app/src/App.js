
import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
//создадим пустой массив  todos  и функция для его изменения setTodos и по умолчанию это путой массив
function App() {
  const [todos, setTodos] = useState([])
 //для добавление задач (Если поле (userInput) пустое то, добавление в список не идёт)
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }
//для удаление задач
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
//для переключение между состояниям задач
  const handleToggle = (id) => {
    setTodos([...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  }
//используем метод map для добавления
  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;