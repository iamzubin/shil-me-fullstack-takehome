import style from './Text.module.css';

export default function Text(prop) {
    return <p className={style.defaultText} style={prop.style}>
        {prop.text}
    </p>;
}