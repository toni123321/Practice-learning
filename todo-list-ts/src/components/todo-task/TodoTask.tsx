import React from 'react';
import { ITask } from '../../Interfaces'
import './TodoTask.css';

interface IProps {
    todoTask: ITask;
    completeTask: (taskName: string) => void;
}

const TodoTask = ({ todoTask, completeTask }: IProps) => {
    return (
        <div className="todo-task">
            <div className="content">
                <span>{todoTask.name}</span>
                <span>{todoTask.deadline}</span>
            </div>
            <button onClick={() => completeTask(todoTask.name)}>X</button>
        </div>
    );
}

export default TodoTask;