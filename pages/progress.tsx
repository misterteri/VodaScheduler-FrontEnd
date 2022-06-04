import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Square.module.css";
import Header from "../component/header";
import titleStyles from "../styles/Title.module.css";

export default function progress() {
  return (
    <>
      <Head>
        <title>progress</title> // tab title
        <link rel="icon" href="/favicon.ico" /> // tab logo
      </Head>
      <div className={styles.square}>
        <Header />
        <div className={titleStyles.h1}>
          <div
            style={{
              display: `flex`,
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          >
            <h1>Progress</h1>
          </div>
        </div>
      </div>
    </>
  );
}
