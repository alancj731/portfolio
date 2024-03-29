import "./app.scss";
import Navbar from "/src/components/navbar/Navbar";
import Person from "./components/person/Person";
import Portfolio from "./components/portfolio/Portfolio";

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
      <section id="Contact">Seven</section>
      <section id="About">Contact</section>
    </div>
  );
};

export default App;
