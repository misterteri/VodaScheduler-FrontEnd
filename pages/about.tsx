import Head from "next/head";
import styles from "../styles/Square.module.css";
import Header from "../component/header";
import titleStyles from "../styles/Title.module.css";

export default function about() {
  return (
    <>
      <Head>
        <title>about</title> // tab title
        <link rel="icon" href="/favicon.ico" /> // tab logo
      </Head>
      <div className={styles.square}>
        <Header />
        <div className={titleStyles.h1}>
          <span>
            <h1>About</h1>
          </span>
        </div>
      </div>
    </>
  );
}
