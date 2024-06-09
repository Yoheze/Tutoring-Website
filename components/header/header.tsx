"use client";

import styles from "./header.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function click() {
    router.push("/availability");
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Yohan's Private Tutoring Website</h1>
        <h3 className={`${styles.title} ${styles.subtitle}`}>
          A tutor passionate about the sciences!
        </h3>
        <button className={`${styles.title} ${styles.button}`} onClick={click}>
          Check Availability!
        </button>
        <div className={styles.imageContainer}>
          <Image
            alt="study table"
            src="/study-table.jpg"
            width="100"
            height="100"
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
}
