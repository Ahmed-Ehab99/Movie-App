/* eslint-disable react/prop-types */
import "./BackToTop.css";

export default function BackToTop({ scroll }) {
  function backToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <a
        onClick={backToTop}
        className={`back-to-top ${scroll > 100 ? "active" : undefined}`}
      >
        <i className="fa-solid fa-arrow-up-long"></i>
      </a>
    </>
  );
}
