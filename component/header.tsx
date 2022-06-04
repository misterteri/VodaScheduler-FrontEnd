import Link from "next/link";
import Image from "next/image";
import logo from "../asset/Logo.svg";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            <Image src={logo} max-width="75" max-height="75" />
          </Link>
        </li>

        <li
          style={{
            height: `inherit`,
            marginLeft: `auto`,
            fontWeight: `bold`,
            marginTop: `auto`,
            marginBottom: `auto`,
          }}
        >
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        <li
          style={{
            height: `inherit`,
            marginLeft: `2.5rem`,
            fontWeight: `bold`,
            marginTop: `auto`,
            marginBottom: `auto`,
          }}
        >
          <Link href="/progress">
            <a>Progress</a>
          </Link>
        </li>

        <li
          style={{
            height: `inherit`,
            marginLeft: `2.5rem`,
            marginTop: `auto`,
            fontWeight: `bold`,
            marginBottom: `auto`,
            marginRight: `2rem`,
          }}
        >
          <Link href="/related-paper">
            <a>Related Paper</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
