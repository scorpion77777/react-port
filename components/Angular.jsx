import Image from "next/image";
import frameWorks from "../assets/angular-icon.svg";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function Card() {
  return (
    <div className="md:w-[50rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse justify-center md:mr-[px] ">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-[#EE4B2B] absolute pl-8 pr-8 pb-2 pt-2   font-semibold">
          <a href="" className="cursor-pointer">
            Live Demo
          </a>
        </div>
        <div className="h-full  w-full relative border-2 border-white rounded-2xl">
          <Image
            src={frameWorks}
            alt="thumbnail"
            layout="fill"
            objectfit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">Advanced</p>
        <h1 className="m-2 text-4xl font-bold dark:text-white">Angular.js.</h1>

        <div className=" pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          <div className="flex flex-row items-center m-2">
            <FaAngular size={20} color="#EE4B2B" />
            <h1 className="pl-1 dark:text-white">Angular.js</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <SiTypescript size={20} color="#007acc" />
            <h1 className="pl-1 dark:text-white">TypeScript</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <SiTailwindcss
              size={30}
              className="text-blue-600 dark:text-blue-600"
            />
            <h1 className="pl-1 dark:text-white">32 Hour</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <FaAws size={40} className="text-yellow-500 dark:text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
