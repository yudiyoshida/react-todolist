import { useContext, useState } from "react"
import { ActionsContext } from "./Board";

export default function TaskRow({ task }) {
  const { handleTaskStatusChange, handleTaskDelete, handleTaskUpdate } = useContext(ActionsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);

  function onTaskUpdate() {
    setIsEditing(!isEditing);
    handleTaskUpdate(task.id, taskTitle)
  }

  return (
    <tr className="task">
      <td>
        <input type="checkbox" checked={task.done} onChange={() => handleTaskStatusChange(task.id)}></input>
      </td>
      <td>
        { isEditing 
          ? <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}></input>
          : <p>{task.title}</p>
        }
      </td>
      <td>
        { isEditing
          ? <button type="button" onClick={onTaskUpdate}>Save</button>
          : <button type="button" onClick={() => setIsEditing(!isEditing)}>Edit</button>
        }
      </td>
      <td>
        <button type="button" onClick={() => handleTaskDelete(task.id)}>Delete</button>
      </td>
    </tr>
  )
}