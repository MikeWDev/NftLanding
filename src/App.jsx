import { useEffect, useState } from "react";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import FreeNft from "./Components/FreeNft";
import Home from "./Components/Home";
import Like from "./Components/Like";
import Navbar from "./Components/Navbar";
import Realese from "./Components/Realese";
import ScrollToTop from "./Components/ScrollToTop";
import SignUp from "./Components/SignUp";
import SuperRare from "./Components/SuperRare";
import "./scss/index.scss";
import ScrollReveal from "scrollreveal";
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div className="app-container" data-theme={theme}>
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <FreeNft />
      <Clients />
      <SuperRare />
      <Realese />
      <Like />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
