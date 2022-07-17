import React from "react";
import { BiTrash } from "react-icons/bi";
import './Task.css';

const Task = (props) => {
    return (
        <div className="task">
            <div className="task-name">{props.name}</div>
            <button className="delete-btn" onClick={()=> {props.removeTask(props.id)}}><BiTrash size="30px"></BiTrash></button>
        </div>
    )
}
export default Task;