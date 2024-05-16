import { BrowserRouter }  from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas} from "./components";
import Members from "./components/Members";
import More from "./components/More"
import Map from "./components/Map"

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <More />
        <Experience />
        <Members />
        <About /> 
        <Map />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
