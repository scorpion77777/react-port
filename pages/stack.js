import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
//import Image from "next/image";

import React from "react";
//import ReactDOM from "react-dom";
import CardPop from "../components/Pop";

export default function Stack() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="ml-8 mt-8">CAPPUCINO</span>
        <CardPop />
      </div>
      <div className="flex flex-col">
        <span className="ml-8 mt-8">ESPRESSO</span>
        <CardPop />
      </div>
      <div className="flex flex-col">
        <span className="ml-8 mt-8">CAFFÈ MOCHA</span>
        <CardPop />
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
