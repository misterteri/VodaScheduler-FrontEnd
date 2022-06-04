import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Square.module.css";
import Header from "../component/header";
import Title from "../component/title";

export default function related_paper() {
  return (
    <>
      <Head>
        <title>related-paper</title> // tab title
        <link rel="icon" href="/favicon.ico" /> // tab logo
      </Head>
      <div className={styles.square}>
        <Header />
      </div>
    </>
  );
}
