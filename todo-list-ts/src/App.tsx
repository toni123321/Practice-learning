import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';
import TodoTask from './components/todo-task/TodoTask';
import { ITask } from './Interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    }
    else {
      setDeadline(Number(event.target.value));
    }
  }

  const clearInputs = () => {
    setTask("");
    setDeadline(0);
  }

  const addTask = (): void => {
    const newTask = {
      name: task,
      deadline: deadline
    }

    setTodoList([...todoList, newTask])
    clearInputs();
  }

  const completeTask = (taskName: string): void => {
    setTodoList(todoList.filter((task) => task.name !== taskName ));
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input 
            type="text" 
            placeholder='Task...'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input 
            type="number" 
            placeholder='Deadline (in days)...'
            name='deadline'
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className='todoList'>
        {todoList.map((todoTask: ITask, key: number) => {
          return <TodoTask key={key} todoTask={todoTask} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
