import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="ml-2 mt-2 bg-[url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80')]"></div>
      <Head>
        <title>Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>
    </>
  );
}
