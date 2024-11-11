"use client";

import Image from "next/image";
import styles from "./page.module.css";
import businessIcon from "../icons/businessIcon.png";
import searchIcon from "../icons/searchIcon.png";
import { useState, useEffect } from "react";

// interface PvPStats {
//   rating: number;
//   wins: number;
//   losses: number;
// }

export default function Home() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  // const [pvpStats, setPvPStats] = useState<PvPStats | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("/api/auth");
        const data = await response.json();

        if (response.ok) {
          setAccessToken(data.accessToken);
          console.log("access token: ", accessToken);
        } else {
          console.error("Failed to retrieve access token: ", data.error);
        }
      } catch (error) {
        console.error("Error fetching access token ", error);
      }
    };

    fetchToken();
  }, [accessToken]);

  // useEffect(() => {
  //   const fetchPvPStats = async () => {
  //     if (!accessToken) return;

  //     try {
  //        const response = await fetch(`/api/wowStats?accessToken=${accessToken}`);
  //     }
  //    }
  // })

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1> WoW PvP Stats</h1>
          {accessToken ? (
            <p>Acces token retrieved</p>
          ) : (
            <p style={{ textAlign: "center" }}>Couldn&apos;t fetch token</p>
          )}
        </div>
      </main>
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
