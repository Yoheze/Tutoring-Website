import styles from "./About_me.module.css";
import Me from "../../public/me.jpg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <h1>About Me:</h1>
        <p>
          A passionate instructor and tutor; I find great joy in helping
          students succeed. I have a strong interest in the Sciences,
          Psychology, and Computer Science. My deep understanding of these
          topics allow me to delve deeper into these subjects if needed. My goal
          as a tutor is to help you achieve the grades you need to reach your
          aspirations. I’m also happy to share advice and insights based on my
          own academic and professional experiences.
        </p>
        <p>
          A Biology graduate from the University of California - Riverside, who
          is currently pursuing a CLS (Clinical Laboratory Scientist)
          certification.
        </p>
        <p></p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={Me}
          width="200"
          height="200"
          alt="Image of Yohan"
          className={styles.me}
        />
      </div>
    </div>
  );
}
