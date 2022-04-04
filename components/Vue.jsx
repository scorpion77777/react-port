import Image from "next/image";
import thumb from "../assets/thumb.svg";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { FaVuejs } from "react-icons/fa";

export default function Card({ toggle, settoggle }) {
  return (
    <div className="md:w-[50rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse justify-center md:mr-[px] ">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2   font-semibold">
          <a href="" className="cursor-pointer">
            Live Demo
          </a>
        </div>
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          <Image
            src={thumb}
            alt="thumbnail"
            layout="fill"
            objectfit="cover"
            className=" rounded-2xl"
          />
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-green-400">Advanced</p>
        <h1 className="m-2 text-4xl font-bold dark:text-white">
          Vue.js Framework.
        </h1>

        <div className=" pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          <div className="flex flex-row items-center m-2">
            <FaVuejs className="text-green-800" size={20} />
            <h1 className="pl-1 dark:text-white">Vue.js</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <SiTypescript size={20} color="#007acc" />
            <h1 className="pl-1 dark:text-white">TypeScript</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <AiOutlineClockCircle size={20} className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">32 Hour</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <VscChecklist size={20} className="dark:text-green-400" />
            <h1 className="pl-1 dark:text-green-400">5 Part</h1>
          </div>
          <div className="flex flex-row ">
            <button
              className="md:m-2 m-auto md:mt[4px] bg-green-400 shadow-md shadow-[#5865f28a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300 "
              onClick={() => settoggle(!toggle)}
            >
              {toggle ? (
                <HiSun className="h-5 w-5 text-black " />
              ) : (
                <HiMoon className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
