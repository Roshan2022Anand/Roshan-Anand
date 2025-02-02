import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Mouse = () => {
  const [pointX, setpointX] = useState(-10);
  const [pointY, setpointY] = useState(-10);
  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setpointX(e.clientX);
      setpointY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        animate={{ top: pointY, left: pointX }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="absolute size-12 rounded-full z-10 border-2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <motion.div
        className="absolute z-10 size-4 bg-white rounded-full pointer-events-none"
        style={{
          top: `${pointY}px`,
          left: `${pointX}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default Mouse;
