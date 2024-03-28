import "./app.scss";
import Navbar from "/src/components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Portfolio">Three</section>
      <section id="Contact">Seven</section>
      <section id="About">Contact</section>

    </div>
  );
};

export default App;
