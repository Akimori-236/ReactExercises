import { Button, Col, Row } from "react-bootstrap";

export function Task(props) {
    return (
        <div>
            <Row><h3>{props.name}</h3>
                <Button onClick={() => { props.onDeleteTask(props.index) }}>X</Button>
            </Row>
            <Row>
                <Col>{props.priority}</Col>
                <Col className="ms-auto">{formatDate(props.date)}</Col>
            </Row>
        </div>
    )
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}