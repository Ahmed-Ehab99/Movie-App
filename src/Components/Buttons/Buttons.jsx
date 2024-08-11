/* eslint-disable react/prop-types */
import "./Buttons.css";

export default function Buttons({ icon, color = "#fff", bgColor = "#ff3700", name, mRight, onClick, className }) {
  return (
    <>
      <a
        className={`mainBtn ${className}`}
        style={{ color: color, background: bgColor, marginRight: mRight }}
        onClick={onClick}
        
      >
        {icon} {name}
      </a>
    </>
  );
}
