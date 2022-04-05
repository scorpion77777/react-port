import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

export default function Index() {
  return (
    <body className="w-full h-full ">
      <div className="flex flex-wrap lg:ml-56 content-evenly justify-center md:justify-start max-w-xl mt-0 md:my-20">
        <span className="text-4xl text-black ml-8">Hi👋! I'm Vahan</span>
        <p className="flex flex-row mt-12 ml-8 text-black">
          Full Stack Web Developer,
          <br />
          Wine maker🍷
          <br />
          Coffee lover🍵
          <br />
          from Mission Viejo, California
        </p>

        <div className="px-8 py-12">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-black rounded-lg blur opacity-75 group-hover:opacity-500 transition duration-1000 group-hover:duration-200 "></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-white">
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-600 -rotate-6 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeLinecap="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <span className="pr-14 text-white text-base">
                    Updated 15.03.2022
                  </span>
                </span>

                <a
                  className="pl-6 text-white text-base group-hover:text-gray-100 transition duration-300 "
                  target={`_blank`}
                >
                  <div className="flex flex-row items-center justify-between">
                    Resume
                    <AiFillCaretRight className="ml-2 h-6 w-6 animate-pulse" />
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
