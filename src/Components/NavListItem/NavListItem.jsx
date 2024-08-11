/* eslint-disable react/prop-types */
import "./NavListItem.css";

export default function NavListItem({ nav, navOnClick }) {
  return (
    <>
      <li>
        <a
          className={`${nav.active ? "active" : undefined}`}
          href={nav.link}
          onClick={() => {
            navOnClick(nav._id);
          }}
        >
          {nav.name}
        </a>
      </li>
    </>
  );
}
