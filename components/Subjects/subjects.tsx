import styles from "./subjects.module.css";

export default function Subjects() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10vh" }}>
        Subjects Taught:
      </h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Classes Taken</th>
            <th>Passed Exam on Wyzant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.bold}>Biology</td>
            <td>
              (1yr.) General Biology Series + Laboratory, Genetics,
              Biochemistry, Genomics & BioInformatics, Evolution, Ecology,
              Parasitology, Human Genetics, Immunology, AP Biology
            </td>
            <td className={styles.green}>Yes</td>
          </tr>
          <tr>
            <td className={styles.bold}>Chemistry</td>
            <td>
              (1yr.) General Chemistry + Laboratory, (1yr.) Organic Chemistry +
              Laboratory
            </td>
            <td className={styles.green}>Yes</td>
          </tr>
          <tr>
            <td className={styles.bold}>Physics</td>
            <td>(1yr.) General Physics + Laboratory</td>
            <td className={styles.yellow}>
              No, will need to do a little review, but aced the entire physics
              series
            </td>
          </tr>
          <tr>
            <td className={styles.bold}>Calculus</td>
            <td>Calculus Series up to Integrals</td>
            <td className={styles.yellow}>
              Not yet taken, will need to review, but have tutored in this
              subject and aced all calculus courses
            </td>
          </tr>
          <tr>
            <td className={styles.bold}>Mathematics</td>
            <td>Elementary Mathematics to Precalculus</td>
            <td className={styles.green}>Yes</td>
          </tr>
          <tr>
            <td className={styles.bold}>Computer Science</td>
            <td>
              Problem Solving/Program Design C++, Introduction to Computing
            </td>
            <td className={styles.green}>
              JavaScript, and HTML tests passed (C++ was not offerred)
            </td>
          </tr>
          <tr>
            <td className={styles.bold}>Psychology/Neuroscience</td>
            <td>
              (1yr.) General Psychology Series, Introductory Neuroscience,
              Cellular Neuroscience, Systems Neuroscience, Developmental
              Neuroscience, Introduction to Developmental Biology
            </td>
            <td className={styles.green}>Yes</td>
          </tr>
          <tr>
            <td className={styles.bold}>Music Theory</td>
            <td>5 year certification, Basic and Advanced Music Fundamentals</td>
            <td className={styles.green}>Yes</td>
          </tr>
          <tr>
            <td className={styles.bold}>English</td>
            <td>(1yr.) General English Series</td>
            <td className={styles.green}>Yes</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
