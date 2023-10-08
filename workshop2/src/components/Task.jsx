import { Col, Row } from "react-bootstrap";

export function Task(props) {
    return (
        <div>
            <Row><h3>{props.name}</h3>
            </Row>
            <Row>
                <Col>{props.priority}</Col>
                <Col className="ms-auto">{props.date}</Col>
            </Row>
        </div>
    )
}