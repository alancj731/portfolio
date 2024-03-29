import "./app.scss";
import Navbar from "/src/components/navbar/Navbar";
import Person from "./components/person/Person";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <div className="pageContainer">
        <Navbar />
        <Person />
        </div>
      </section>
      <section id="Portfolio">Three</section>
      <section id="Contact">Seven</section>
      <section id="About">Contact</section>

    </div>
  );
};

export default App;
