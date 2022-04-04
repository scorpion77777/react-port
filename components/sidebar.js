import Link from "next/link";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";
export default function Sidebar() {
  return (
    <>
      <nav className={styles.nav}>
        <div
          className="cursor-pointer flex flex-col items-center justify-center ml-8"
          style={{
            position: "relative",
            width: "100px",
            height: "100px",
          }}
        >
          <GiCoffeeBeans
            className="flex flex-col mr-24 w-45 h-45 text-gray-400"
            alt="Logo"
            layout="responsive"
            objectfit="contain"
            quality={100}
          />

          <span className={styles.glow}>Ilumination</span>
          <p className="text-sm text-gray-500 flex flex-row align-middle justify-center ml-4">
            by vahan
          </p>
        </div>
        <input className={styles.input} placeholder="Search..." />
        <Link href="/">
          <a className="bg-black">Home</a>
        </Link>
        <Link href="/stack">
          <a className="bg-black">Stack</a>
        </Link>
        <Link href="/contact">
          <a className="bg-black">Contact</a>
        </Link>
        <Link href="/portfolio">
          <a className="bg-black">Portfolio</a>
        </Link>
      </nav>
    </>
  );
}
