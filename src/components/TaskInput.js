import { useState } from "react";

export default function TaskInput({ onClick }) {
  const [task, setTask] = useState('');

  function handleClick() {
    const taskTrimmed = task.trim();

    if (taskTrimmed.length !== 0) {
      onClick(taskTrimmed);
      setTask('');
    } else {
      alert('Task é um campo obrigatório!')
    }
  }

  return (
    <div className="container__input">
      <input type="text" placeholder="Type here" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleClick}>Add</button>
    </div>
  )
}