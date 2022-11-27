import style from "./InputNumber.module.css";

export default function InputNumber(prop) {
  return (
    <>
      <h3>{prop.title}</h3>
      <input
        type="number"
        className={style.defaultInputNumber}
        placeholder={prop.placeholder}
        style={prop.style}
        value={prop.value}
        onChange={(e) => prop.updateState(prop.title,e.target.value)}
      />
    </>
  );
}
