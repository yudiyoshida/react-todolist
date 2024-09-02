import { createContext, useState } from "react";
import TaskInput from "./TaskInput";
import TaskTable from "./TaskTable";

export const ActionsContext = createContext();

export default function Board() {
  const [data, setData] = useState([]);

  function createTask(title) {
    const id = crypto.randomUUID();
    const newData = data.concat({ id, title, done: false });

    setData(newData);
  }

  function handleTaskStatusChange(id) {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done }
      } else {
        return item;
      }
    }))
  }

  function handleTaskUpdate(id, title) {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, title }
      } else {
        return item;
      }
    }))
  }

  function handleTaskDelete(id) {
    setData(data.filter(item => item.id !== id))
  }

  return (
    <ActionsContext.Provider value={{ handleTaskUpdate, handleTaskDelete, handleTaskStatusChange }}>
      <div className="container">
        <TaskInput onClick={createTask}/>
        <TaskTable tasks={data} />
      </div>
    </ActionsContext.Provider>
  )
}