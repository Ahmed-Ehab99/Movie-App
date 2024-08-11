import { Offline } from "react-detect-offline";
import Banner from "./Components/Banner/Banner";
import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  return (
    <>
      <div>
        <Offline>
          <div className="d-flex justify-content-center align-items-center">
            <div className="offline">You Are Offline</div>
          </div>
        </Offline>
      </div>
      <NavBar scroll={scroll} />
      <Banner scroll={scroll} />
      <Footer />
    </>
  );
}

export default App;
