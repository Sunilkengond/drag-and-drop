import {
    CardMain,
    Header,
    Body
} from './Card.styles';

export default function Card({ index, draggble, setActive }) {
    return (
        <CardMain
            id={index}
            draggable={draggble}
            onDragStart={draggble ? () => setActive(index) : ''}
            onDragEnd={draggble ? () => setActive(null) : ''}
        >
            <Header id='header'>Welcome</Header>
            <Body id='body'> Widget Component {index}</Body>
        </CardMain>
    )
}