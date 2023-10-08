/* eslint-disable react/prop-types */
import { Task } from './Task'

export function DisplayTasks(props) {
  if (props.tasks.length !== 0) { // Use props.tasks.length to check the size of the array
    return (
      <div>
        <h1 className='text-warning fw-bold'>Tasks</h1>
        {props.tasks.map((t, index) => (
          <Task key={index} name={t.name} priority={t.priority} date={t.date} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className='text-warning fw-bold'>Tasks</h1>
      </div>
    );
  }
}
