/* eslint-disable react/prop-types */
import "./NavBar.css";
import Buttons from "../Buttons/Buttons";
import { useRef, useState } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import NavListItem from "../NavListItem/NavListItem";

export default function NavBar({ scroll }) {
  const [navList, setNavList] = useState(HeaderNav);
  const navRef = useRef();

  const handleNavOnClick = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
    navRef.current.classList.remove("responsive-nav");
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      <header className={`${scroll > 100 ? "scrolled" : undefined}`}>
        <a className="logo" href="/">
          cinema
        </a>
        <nav ref={navRef}>
          <ul className="links">
            {navList.map((nav) => (
              <NavListItem
                key={nav._id}
                nav={nav}
                navOnClick={handleNavOnClick}
              />
            ))}
          </ul>
          <div className="responsive">
            <div className="search">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <Buttons
            icon={<i className="fa-solid fa-arrow-right-to-bracket"></i>}
            name="Sign Up"
          />
          </div>
          
        </nav>
        <Buttons
          className={"nav-btn"}
          icon={<i className="fa-solid fa-bars"></i>}
          onClick={showNavbar}
        />
      </header>
    </>
  );
}
