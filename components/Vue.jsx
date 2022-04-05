import Image from "next/image";
import thumb from "../assets/vue-9.svg";
import { SiTypescript } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { FaVuejs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { SiMysql } from "react-icons/si";

export default function Card() {
  return (
    <div className="md:w-[50rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse justify-center md:mr-[px] space-y-4 ">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-[#355E3B] absolute pl-8 pr-8 pb-2 pt-2   font-semibold">
          <a href="" className="cursor-pointer">
            Live Demo
          </a>
        </div>
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          <Image
            src={thumb}
            alt="thumbnail"
            layout="intrinsic"
            objectfit="cover"
            className=" rounded-2xl"
          />
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-green-400">Advanced</p>
        <h1 className="m-2 text-4xl font-bold dark:text-white">Vue.js.</h1>

        <div className=" pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          <div className="flex flex-row items-center m-2">
            <FaVuejs className="text-green-800" size={20} />
            <h1 className="pl-1 dark:text-white">Vue.js</h1>
          </div>
          <div className="flex flex-row items-center">
            <SiJavascript size={20} color="#FFC000" />
            <h1 className="pl-1 dark:text-white">JavaScript</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <DiNodejsSmall size={30} className="dark:text-green-400" />
            <h1 className="pl-1 dark:text-white">Node.js</h1>
          </div>
          <div className="flex flex-row items-center mb-4">
            <SiMysql size={50} className="dark:text-blue-400" />
            <h1 className="pl-1 dark:text-blue-400"></h1>
          </div>
        </div>
      </div>
    </div>
  );
}
