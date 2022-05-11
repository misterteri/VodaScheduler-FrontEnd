import type { NextPage } from "next";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../asset/Logo.svg";

const Header: NextPage = () => {
  return (
    <>
      <div style={{ marginLeft: `2rem` }}>
        <Image src={logo} layout="fixed" width="100" height="100" />
      </div>
      <div className={styles.h1}>Voda</div>
      <div className={styles.h2}>
        Scheduler<span>.</span>
      </div>
    </>
  );
};

export default Header;
