// attributes from parent component received in props variable in child component
// child tags from parent is saved in props.children
export function checkProps(props) {
    console.log(props)
}

export function Greetings(props) {
    return <div>Hi, {props.firstname} {props.lastname} from {props.school}</div>
}
