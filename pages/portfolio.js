import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Image from "next/image";

import { useState } from "react";
import React from "../components/React";
import Vue from "../components/Vue";
import Angular from "../components/Angular";

export default function Portfolio() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <main className={toggle ? "dark" : "light"}>
        <div className="flex-col text-base ml-8 md:ml-[24px] sm:ml-6 flex justify-center ease-linear duration-300 items-center bg-white dark:bg-slate-900 ">
          <React toggle={toggle} settoggle={setToggle} />
        </div>
        <div className="flex-col text-base mt-4 ml-8 md:ml-[24px] sm:ml-6 flex justify-center ease-linear duration-300 items-center bg-white dark:bg-slate-900 ">
          <Vue toggle={toggle} settoggle={setToggle} />
        </div>
        <div className="flex-col text-base mt-4 ml-8 md:ml-[24px] sm:ml-6 flex justify-center ease-linear duration-300 items-center bg-white dark:bg-slate-900 ">
          <Angular toggle={toggle} settoggle={setToggle} />
        </div>
        <br />
      </main>
    </>
  );
}
Portfolio.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
