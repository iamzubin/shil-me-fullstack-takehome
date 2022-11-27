import style from './Card.module.css';

export default function Card (prop) {
    return <div className={style.defaultCard} style={prop.style}>
        {prop.children}
    </div>;
}