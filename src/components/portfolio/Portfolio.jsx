import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tetris Game",
    img: "tetris.gif",
    desc: "A Teris game built in JavaScript, HTML, and CSS.",
    link: "https://alancj731.github.io/tetris-js",
  },
  {
    id: 2,
    title: "Sorting Program",
    img: "sorting.gif",
    desc: "A program shows how sorting algorithms work.",
    link: "https://sorting-ten.vercel.app",
  },
  {
    id: 3,
    title: "Memo Helper",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A Next Js program that helps you remember things.",
    link: "https://youtube.com",
  },
  {
    id: 4,
    title: "New App",
    // img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img: "/land.jpg ",
    desc: "Coming soon!",
    link: "https://youtube.com",
  },
];

const Single = ({ item }) => {
  const imageRef = useRef();

  const { scrollYProgress } = useScroll({
    target: imageRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id={item.id === 1 ? "Portfolio" : item.id}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={imageRef}>
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              onClick={() => {
                window.open(item.link, "_blank");
              }}
            >
              Go Live
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(0);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const reverseYProgress = useTransform(
    scrollYProgress,
    (progress) => 1 - progress
  );

  const scaleX = useSpring(reverseYProgress, {
    stiffness: 400,
    damping: 90,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projets</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
