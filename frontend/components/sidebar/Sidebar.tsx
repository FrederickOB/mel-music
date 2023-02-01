import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sidebarNavItems } from "./sidebarItems";
import { FC } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Sidebar: FC = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const [showFormDropdown, setShowFormDropdown] = useState(true);
  const [collapseShow, setCollapseShow] = useState(false);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const router = useRouter();

  console.log(router.asPath);
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
    <div className="">
      <div
        className={`fixed transition-all  p-3 ${
          collapseShow ? "delay-500 top-0 left-0 z-50" : " top-5 left-8 z-30"
        }`}
      >
        {!collapseShow ? (
          <button
            className="px-3 py-1 text-xl leading-none text-gray-400 bg-transparent border border-transparent border-solid rounded cursor-pointer lg:hidden"
            type="button"
            onClick={() => setCollapseShow(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
        ) : (
          <button
            type="button"
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer lg:hidden"
            onClick={() => setCollapseShow(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
      <div
        className={` h-screen   fixed  py-8 px-8 top-0  duration-700  transition-all left-0 z-40  lg:w-[12.5%] bg-white dark:bg-black  ${
          collapseShow ? " p-5 w-2/6 " : " w-0 "
        } lg:block `}
      >
        <div
          className={`transition-opacity ${
            collapseShow
              ? " delay-500 opacity-100 "
              : " duration-75 opacity-0 invisible "
          }lg:visible lg:opacity-100 `}
        >
          <div className="space-y-10">
            {sidebarNavItems.map((item, index) => (
              <div key={index} className="cursor-pointer">
                <Link href={item.to} className="cursor-pointer">
                  <div
                    className={` group flex items-center content-start mb-3 py-0.5   transition duration-400 ease-in-out item ${
                      router.asPath === item.to
                        ? "text-green-400"
                        : "text-gray-400"
                    }`}
                  >
                    <div className="mr-4 text-base group-hover:animate-bounce">
                      {item.icon}
                    </div>
                    <div className="text-sm ">{item.display}</div>
                  </div>
                </Link>
                <motion.div
                  animate={router.asPath === item.to ? "open" : "closed"}
                  variants={variants}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className="h-0.5  bg-gradient-to-r to-black from-green-400"
                ></motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
