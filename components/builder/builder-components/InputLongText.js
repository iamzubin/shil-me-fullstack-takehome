import style from "./InputLongText.module.css";

export default function InputLongText(prop) {
  return (
    <>
      <h3>{prop.title}</h3>
      <textarea
        className={style.defaultInputLongText}
        style={prop.style}
        onChange={(e) => prop.updateState(prop.title,e.target.value)}
        value={prop.value}
        placeholder={prop.placeholder}
        
      />
    </>
  );
}
