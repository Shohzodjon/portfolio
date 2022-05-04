import Nav from "./components/navbar/Nav";
import "./App.css";
import Intro from "./components/intro/Intro";
import Service from "./components/service/Service";
import Experience from "./components/experinece/Experience";
import Work from "./components/work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
