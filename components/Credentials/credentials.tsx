import styles from "./credentials.module.css";
import Image from "next/image";
import UCR_Logo from "../../public/ucr-logo.png";
import Codesmith_Logo from "../../public/Codesmith_logo.png";
import Edupro_Logo from "../../public/edupro_logo.png";
import Prifina_Logo from "../../public/prifina_logo.png";

export default function Credentials() {
  return (
    <div className={styles.about}>
      <div className={styles.imageContainer}>
        <Image alt="UCR logo" src={UCR_Logo} className={styles.ucr_logo} />
        <Image
          src={Codesmith_Logo}
          alt="Codesmith logo"
          className={styles.codesmith}
        />
        <Image src={Edupro_Logo} alt="Edupro logo" className={styles.edupro} />
        <Image
          src={Prifina_Logo}
          alt="Prifina logo"
          className={styles.prifina}
        />
      </div>
      <div className={styles.right}>
        <h1>Credentials:</h1>
        <div>
          <h3>Education:</h3>
          <ul>
            <li>University of California - Riverside (Biology)</li>
            <ul>
              <li>Cum Laude - top 10%</li>
              <li>Cumulative GPA: 3.7</li>
            </ul>
            <li>Codesmith - Coding Bootcamp</li>
            <li>McKallen Medical - Certified Nursing Assistant Program</li>
          </ul>
        </div>
        <div>
          <h3>Tutoring Experience (3 years~):</h3>
          <ul>
            <li>Edupro (current)</li>
            <ul>
              <li>Sciences tutor for middle to high school</li>
            </ul>
            <li>Concorde Education (current)</li>
            <ul>
              <li>Introductory Programming/Robotics Instructor</li>
            </ul>
            <li>Study Hut</li>
            <ul>
              <li>
                Tutor for mathematics and sciences from middle school to
                university
              </li>
            </ul>
            <li>Nobel Learning Academy</li>
            <ul>
              <li>Group tutor for mathematics for elementary students</li>
            </ul>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: "-12px" }}>Extra:</h3>
          <div>
            <h4>Sciences:</h4>
            <ul>
              <li>
                Marine Biology Research Lab Assistant at the University of
                California - Riverside
              </li>
              <li>
                Hospital Clinical Lab Volunteer at Providence Little Company of
                Mary Medical Center
              </li>
            </ul>
          </div>
          <div>
            <h4>Computer Science:</h4>
            <ul>
              <li>OSLabs</li>
              <ul>
                <li>
                  Computer Science internship, contributing to an Open Source
                  tool with a team of developers for a popular web developer
                  library called React
                </li>
              </ul>
              <li>Prifina</li>
              <ul>
                <li>
                  Computer Science Internship, worked alongside a team of
                  designers and developers to create a period tracking
                  application called Ovul
                </li>
              </ul>
              <li>Tech Talk</li>
              <ul>
                <li>
                  Featured speaker at Jeeny and Bractlet Tech Talk on the
                  Comparison of Load Balancing Strategies
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <h4>Music:</h4>
            <ul>
              <li>
                5 years of keyboard and music theory (passed level 5
                examination)
              </li>
              <li>Completion of advanced music theory university course</li>
              <li>10~ years of percussion - pianist for high school band</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
