import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu";
import SimpleReactLightbox from "simple-react-lightbox";
import Popup from "./components/welcome/Welcome.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  // const [buttonPopup, setButtonPopup] = useState(false);
  
  const [isOpen, setIsOpen] = useState(true)
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
  <div className="welcome">
    {isOpen && <Popup content={<>
        <b>Welcome,</b>
        <p>And thank you for visiting my website. 
          This is a temporary portfolio meant to show my graphic design work, 
          And there are parts that are still not yet completed. </p>
      </>}
      handleClose={togglePopup}
    />}
    <div className="app">
      <Topbar menuO={menuOpen} setMenuO={setMenuOpen}/>
      <Menu menuO={menuOpen} setMenuO={setMenuOpen}/>
      <div className="sections">
     {/* &lt;This section is relative&gt; */}
     {/* <button onClick={() => setButtonPopup(true)}>open</button>
     <Welcome trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h1>welcome</h1>
    </Welcome> */}

        <Intro/>     
        <Works/>
        <SimpleReactLightbox>
        <Portfolio/>
        </SimpleReactLightbox> 
        <Contact/>
      </div>
    </div>
  </div>
  );
}

export default App;
