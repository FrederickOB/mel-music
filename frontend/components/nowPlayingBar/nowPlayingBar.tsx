import Image from "next/image";
import React from "react";

export default function NowPlayingBar() {
  return (
    <div className="fixed px-8 w-screen z-50 flex space-x-8 items-center bottom-0 left-0  bg-white dark:bg-black h-[12.5%]">
      <div className="flex items-center w-1/6 space-x-6">
        <div className="w-16 h-16 bg-green-400"></div>
        <div className="flex flex-col">
          <p className="text-sm">Title</p>
          <p className="text-[0.65rem] text-white/50 ">Artist</p>
        </div>
        <div>
          <svg
            width={15}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="green"
              d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
            />
          </svg>
        </div>
      </div>
      <div className="flex w-4/6 py-2 space-x-8 ">
        <div>
          <Image
            src="/icons/Play.svg"
            width={45}
            height={45}
            alt="play button"
          />
        </div>
        <div className="w-full space-y-2">
          <div className="flex justify-between">
            <Image
              src="/icons/Skip.svg"
              width={15}
              height={15}
              alt="play button"
            />{" "}
            <Image
              src="/icons/Skip2.svg"
              width={15}
              height={15}
              alt="play button"
            />
          </div>
          <input
            type="range"
            name=""
            id=""
            min="1"
            max="100"
            step="1"
            className="w-full overflow-hidden rounded-full outline-none appearance-none bg-white/10 accent-green-400"
          />
        </div>
      </div>
      <div className="flex items-end justify-between w-1/6">
        <div className="flex space-x-4">
          <div>
            <svg
              width={15}
              height={15}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="gray"
                d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"
              />
            </svg>
          </div>
          <div>
            <svg
              width={15}
              height={15}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="gray"
                d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"
              />
            </svg>
          </div>
        </div>
        <div className="flex">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
}

export const Star = ({}) => {
  return (
    <svg
      width={15}
      height={15}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="yellow"
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
      />
    </svg>
  );
};
