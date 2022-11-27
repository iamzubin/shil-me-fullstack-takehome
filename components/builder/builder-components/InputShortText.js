import style from "./InputShortText.module.css";

export default function InputShortText(prop) {
  return (
    <>
      <h3>{prop.title}</h3>
      <input
        className={style.InputShortText}
        style={prop.style}
        type="text"
        placeholder={prop.placeholder}
        onChange={(e) => prop.updateState(prop.title,e.target.value)}
      />
    </>
  );
}
