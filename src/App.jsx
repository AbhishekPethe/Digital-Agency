import About from "./Components/About";
import Contact from "./Components/Contact";
import Design from "./Components/Design";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Updates from "./Components/Updates";
import Mobile from "./Components/mobile";



import "./index.css";

function App() {
/* Storing user's device details in a variable*/
let details = navigator.userAgent;
  
/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;
  
/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);
  
if (isMobileDevice) {
    console.log("You are using a Mobile Device");
} else {
    console.log("You are using Desktop");
}

  return (
    <>
      {
        isMobileDevice ? <Mobile />
          :
          <>
            <Home />
            <About />
            <Design />
            <Portfolio />
            <Team />
            <Testimonials />
            <Updates />
            <Contact />
            <Footer />
          </>
      }
    </>
  );
}

export default App;
