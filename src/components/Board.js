import { createContext, useReducer, useState } from "react";
import TaskInput from "./TaskInput";
import TaskTable from "./TaskTable";

export const ActionsContext = createContext();

function taskReducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, { id: action.id, title: action.title, done: false }]
    }
    case 'updateStatus': {
      return state.map(item => item.id === action.id ? { ...item, done: !item.done } : item)
    }
    case 'edit': {
      return state.map(item => item.id === action.id ? { ...item, title: action.title } : item)
    }
    case 'delete': {
      return state.filter(item => item.id !== action.id)
    }
    default: {
      throw new Error('Invalid action type!')
    }
  }
}

export default function Board() {
  const [data, dispatch] = useReducer(taskReducer, []);

  function createTask(title) {
    dispatch({
      type: 'add',
      id: crypto.randomUUID(),
      title,
    })
  }

  function handleTaskStatusChange(id) {
    dispatch({
      type: 'updateStatus',
      id
    })
  }

  function handleTaskUpdate(id, title) {
    dispatch({
      type: 'edit',
      id,
      title
    })
  }

  function handleTaskDelete(id) {
    dispatch({
      type: 'delete',
      id
    })
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