import { useState } from "react"

export default function TaskRow({ task, onTaskStatusChange, onTaskDelete, onTaskUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);

  function handleTaskUpdate() {
    setIsEditing(!isEditing);
    onTaskUpdate(task.id, taskTitle)
  }

  return (
    <tr className="task">
      <td>
        <input type="checkbox" checked={task.done} onChange={() => onTaskStatusChange(task.id)}></input>
      </td>
      <td>
        { isEditing 
          ? <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}></input>
          : <p>{task.title}</p>
        }
      </td>
      <td>
        { isEditing
          ? <button type="button" onClick={handleTaskUpdate}>Save</button>
          : <button type="button" onClick={() => setIsEditing(!isEditing)}>Edit</button>
        }
      </td>
      <td>
        <button type="button" onClick={() => onTaskDelete(task.id)}>Delete</button>
      </td>
    </tr>
  )
}