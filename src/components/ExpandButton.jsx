import { useState } from "react";
import { motion } from "framer-motion";
import { useMotionValue } from "framer-motion";

export const ExpandButton = () => {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const setTransform = (item, event, x, y) => {
    const bounds = item.getBoundingClientRect();

    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;

    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);

    x.set(xRange * 20);
    y.set(yRange * 20);
  };

  return (
    <motion.button
      type="button"
      className="expand-btn"
      onPointerMove={(event) => {
        const item = event.currentTarget;
        setTransform(item, event, x, y);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={handleExpand}
      style={{ x, y }}
    >
      <motion.span className="expand-btn__title" style={{ x, y }}>
        {isExpand === true ? "Less" : "More"}
      </motion.span>
    </motion.button>
  );
};
