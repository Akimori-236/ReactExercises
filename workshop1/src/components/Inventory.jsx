import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { INVENTORY_LIST } from '../constants';

export function Inventory(props) {
    const items = INVENTORY_LIST

    return (
        <div>
            <h1>Please Select</h1>
            <ListGroup>
                {items.map((i) => {
                    return (
                        <ListGroup.Item key={i}>
                            <span>{i}</span>
                            <Button variant="outline-primary" onClick={() => props.onAddItem(i)}>Add</Button>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    );
}