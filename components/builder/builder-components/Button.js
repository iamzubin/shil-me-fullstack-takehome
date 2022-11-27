import style from './Button.module.css';

export default function Button(prop) {
    return <button className={style.defaultButton} style={prop.style} onClick={() => prop.callback?.()}>
        {prop.title}
    </button>
};