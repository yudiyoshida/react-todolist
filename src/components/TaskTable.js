import TaskRow from "./TaskRow"

export default function TaskTable({ tasks }) {
  const rows = tasks.map(task => {
    return <TaskRow key={task.id} task={task} />
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