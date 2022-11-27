import style from './Title.module.css';

export default function Title(prop) {
    return <h1 className={style.defaultTitle} style={prop.style}>
        {prop.title}
    </h1>;
}