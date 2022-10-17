import React, { useState } from "react";
import { motion } from "framer-motion";

function SearchBar() {
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
      <motion.input
        animate={showBar ? "open" : "closed"}
        variants={variants}
        transition={{ ease: "easeOut", duration: 1 }}
        type="search"
        name="search"
        id="search"
        className="h-5 rounded-full focus:outline-green-400/50 bg-green-400/40 dark:bg-black/20  text-green-400/50 px-1.5 text-sm mr-2"
      />
      <button onClick={() => setShowBar((state) => !state)}>
        <SearchIcon
          width={15}
          height={15}
          color={`${showBar ? "green" : "gray"}`}
        />
      </button>
    </div>
  );
}

export default SearchBar;

interface SearchIconProps {
  width: number;
  height: number;
  color?: string;
  className?: string;
}

export function SearchIcon({
  width,
  height,
  className,
  color,
}: SearchIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.44 27.1181L37.5502 36.6236L34.7596 39L26.6712 29.5164C24.0551 31.2605 21.17 32.1325 18.016 32.1325C15.9085 32.1325 13.8918 31.7219 11.9661 30.9008C10.0403 30.0796 8.38338 28.975 6.99529 27.5869C5.6072 26.1989 4.5026 24.542 3.68148 22.6162C2.86035 20.6904 2.44976 18.6737 2.44971 16.5663C2.44965 14.4588 2.86024 12.4422 3.68148 10.5164C4.50271 8.59054 5.60732 6.93362 6.99529 5.54558C8.38327 4.15755 10.0402 3.05295 11.9661 2.23177C13.8919 1.41059 15.9086 1 18.016 1C20.1234 1 22.14 1.41059 24.0659 2.23177C25.9917 3.05295 27.6487 4.15755 29.0366 5.54558C30.4246 6.93362 31.5292 8.59054 32.3505 10.5164C33.1717 12.4422 33.5823 14.4588 33.5822 16.5663C33.5822 17.9034 33.4151 19.2115 33.0808 20.4905C32.7465 21.7695 32.2705 22.9613 31.6528 24.066C31.0351 25.1706 30.2975 26.188 29.4399 27.1181H29.44ZM18.0161 28.4697C19.6293 28.4697 21.17 28.1536 22.638 27.5213C24.1059 26.8891 25.3704 26.0425 26.4314 24.9815C27.4923 23.9205 28.339 22.6561 28.9712 21.1881C29.6035 19.7201 29.9196 18.1795 29.9196 16.5662C29.9196 14.9529 29.6035 13.4123 28.9712 11.9443C28.339 10.4763 27.4923 9.21179 26.4314 8.15076C25.3704 7.08974 24.1059 6.24312 22.638 5.61091C21.17 4.9787 19.6293 4.6626 18.0161 4.6626C16.4028 4.6626 14.8621 4.9787 13.3942 5.61091C11.9262 6.24312 10.6617 7.08977 9.60064 8.15085C8.53962 9.21193 7.693 10.4764 7.06079 11.9443C6.42858 13.4121 6.11248 14.9528 6.11248 16.5662C6.11248 18.1796 6.42858 19.7202 7.06079 21.1881C7.693 22.6559 8.53965 23.9204 9.60073 24.9815C10.6618 26.0426 11.9263 26.8892 13.3942 27.5213C14.862 28.1535 16.4027 28.4696 18.0161 28.4697Z"
        fill={color}
      />
    </svg>
  );
}
