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

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
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
