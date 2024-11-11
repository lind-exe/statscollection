import Image from "next/image";
import styles from "./page.module.css";
import businessIcon from "../icons/businessIcon.png";
import searchIcon from "../icons/searchIcon.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/jonathan-lind-675895259"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={businessIcon}
            alt="Business icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/lind-exe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={searchIcon}
            alt="Search icon"
            width={16}
            height={16}
          />
          My GitHub →
        </a>
      </footer>
    </div>
  );
}
