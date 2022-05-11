import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <ul
      style={{
        display: "flex",
        flex: 1,
        listStyleType: "none",
        marginLeft: `0.3rem`,
      }}
    >
      <li
        style={{
          marginRight: `5rem`,
          fontSize: `1.5rem`,
        }}
      >
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li
        style={{
          marginRight: `5rem`,
          fontSize: `1.5rem`,
        }}
      >
        <Link href="/progress">
          <a>Progress</a>
        </Link>
      </li>
      <li
        style={{
          marginRight: `5rem`,
          fontSize: `1.5rem`,
        }}
      >
        <Link href="/related-paper">
          <a>Related Paper</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
