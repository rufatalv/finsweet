import { motion } from "framer-motion";
const icon = {
  hidden: {
    fill: "transparent",
  },
  visible: {
    fill: "rgba(255, 255, 255, 1)",
  },
};
const Preloader = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.path
        d="M121.784 18.8719V21.891H119.252C116.549 21.806 115.105 20.3467 115.105 17.6055V10.7102H113.337V8.06174H115.105V5.09668H118.842V8.03086H121.699V10.6716H118.842V17.2349C118.842 18.1229 119.02 18.8333 120.387 18.8333L121.784 18.8719Z"
        variants={icon}
        initial="hidden"
        className={'text-white fill-white'}
        animate="visible"
      />
    </motion.svg>
  );
};

export default Preloader;
