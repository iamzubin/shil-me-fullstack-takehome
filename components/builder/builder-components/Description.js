import style from './Description.module.css';

export default function Description(prop) {
    return <p className={style.defaultDescription} style={prop.style}>
        {prop.text}
    </p>;
}