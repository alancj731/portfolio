import "./app.scss";
import Navbar from "/src/components/navbar/Navbar";
import Person from "./components/person/Person";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Homepage">
      <Navbar />
        <div className="pageContainer">
          <Person />
        </div>
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <div id="About">About</div>
    </div>
  );
};

export default App;
