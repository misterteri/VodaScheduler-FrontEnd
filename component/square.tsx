import type { NextPage } from "next";
import Header from "./header";
import Navbar from "./navbar";
import styles from "../styles/Square.module.css";
import Upload from "./upload_button";

const Square: NextPage = () => {
  return (
    <div className={styles.square}>
      <Header />
      <Navbar />
      <Upload />
    </div>
  );
};

export default Square;
