import styles from "./navbar.module.css";

export default function () {
  return (
    <>
      <nav className={styles.nav}>
        <h3>About Me</h3>
        <h3>Credentials</h3>
        <h3>Subjects</h3>
        <h3>Tutoring Style</h3>
        <h3>Testimonials</h3>
        <h3>FAQ</h3>
      </nav>
    </>
  );
}
