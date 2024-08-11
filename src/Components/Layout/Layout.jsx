/* eslint-disable react/prop-types */
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { Outlet } from "react-router-dom";

export default function Layout({ scroll }) {
  return (
    <>
      <NavBar scroll={scroll} />
      <Outlet />
      <Footer />
    </>
  );
}
