import { Button, Form } from 'react-bootstrap'
import { PriorityLevels } from '../constants'

export function TodoForm(props) {
    const priorities = PriorityLevels

    const submitForm = (event) => {
        event.preventDefault()
        props.onAddTask(event.target.desc.value,
            event.target.priority.value,
            event.target.duedate.value)
    }

    return (
        <Form onSubmit={submitForm}>
            <h1 className='text-warning fw-bold'>To Do</h1>
            <Form.Group className='me-3'>
                <Form.Label>Description: </Form.Label>
                <Form.Control type="text" name="desc" id="descID" />
            </Form.Group>
            <Form.Group className='me-3'>
                <Form.Label>Priority: </Form.Label>
                {priorities.map((level) => {
                    return <span key={level}>
                        <Form.Check
                            inline
                            label={level}
                            type="radio"
                            name="priority"
                            value={level}
                            id={level + "ID"} />
                    </span>
                })}
            </Form.Group>
            <Form.Group className='me-3'>
                <Form.Label>Due: </Form.Label>
                <Form.Control
                    label="Due: "
                    type="date"
                    name="duedate"
                />
            </Form.Group>
            <div className='text-end'>
                <Button className="my-3" variant='primary' type='submit'>
                    Add
                </Button>
            </div>
        </Form>
    )
}