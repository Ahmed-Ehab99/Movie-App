/* eslint-disable react/prop-types */
import "./FooterNavItem.css";

export default function FooterNavItem({name}) {
  return (
    <>
      <li>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">{name}</a>
      </li>
    </>
  );
}
