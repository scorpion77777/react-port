import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import React from "react";
import CappucinoPop from "../components/Cappuccino";
import EspressoPop from "../components/Espresso";
import MochaPop from "../components/Mocha";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Stack() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="flex flex-row ml-8 mt-8 font-thin">
          CAPPUCCINO <IoIosArrowRoundForward className="mt-2 ml-2" />
        </span>
        <CappucinoPop />
      </div>
      <div className="flex flex-col">
        <span className="ml-8 mt-8 flex flex-row font-thin text-yellow-700">
          ESPRESSO
          <IoIosArrowRoundForward className="mt-2 ml-2 animate-pulse text-black" />
        </span>
        <EspressoPop />
      </div>
      <div className="flex flex-col">
        <span className="ml-8 mt-8 flex flex-row font-thin">
          CAFFÈ MOCHA
          <IoIosArrowRoundForward className="mt-2 ml-2" />
        </span>
        <MochaPop />
      </div>
    </div>
  );
}

Stack.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
