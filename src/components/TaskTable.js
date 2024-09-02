import TaskRow from "./TaskRow"

export default function TaskTable({ tasks, onTaskStatusChange, onTaskDelete, onTaskUpdate }) {
  const rows = tasks.map(task => {
    return <TaskRow
      key={task.id}
      task={task}
      onTaskStatusChange={onTaskStatusChange}
      onTaskDelete={onTaskDelete}
      onTaskUpdate={onTaskUpdate}
    />
  })

  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}