import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tetris Game",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A Teris game built in JavaScript, HTML, and CSS.",
  },
  {
    id: 2,
    title: "Sorting Program",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A program shows how sorting algorithms work.",
  },
  {
    id: 3,
    title: "Memo Helper",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A Next Js program that helps you remember things.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

// const ref = useRef(0);

// const {scrollYProgress} = useScroll({
//     target: ref,
//     offset: ["end end", "start start"]
// });

// const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
// });

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