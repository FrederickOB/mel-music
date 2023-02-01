import React, { useState } from "react";
import { motion } from "framer-motion";

export default function UserMenu() {
  const [showBar, setShowBar] = useState(false);
  const variants = {
    open: {
      width: "100%",
      transition: { type: "spring", stiffness: 100, damping: 24, duration: 2 },
      display: "block",
      opacity: 1,
    },
    closed: {
      width: 0,
      transitionEnd: {
        display: "none",
      },
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 2,
      },
    },
  };
  return (
    <div className="flex items-center justify-end px-2 py-2 rounded-full bg-green-400/20 dark:bg-white/10">
      <motion.span
        animate={showBar ? "open" : "closed"}
        variants={variants}
        transition={{ ease: "easeOut", duration: 1 }}
        id="search"
        className="h-5 rounded-full focus:outline-green-400/50 text-green-400/50 px-1.5 text-sm mr-2"
      >
        froobah
      </motion.span>

      <button
        className="flex space-x-2"
        onClick={() => setShowBar((state) => !state)}
      >
        <svg
          width={15}
          height={15}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill={`${showBar ? "green" : "gray"}`}
            d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"
          />
        </svg>
        <svg
          width={15}
          height={15}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill={`${showBar ? "green" : "gray"}`}
            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
          />
        </svg>
      </button>
    </div>
  );
}
