import styles from "./testimonials.module.css";
import Image from "next/image";
import Star from "../../public/star.svg";

export default function Testimonials() {
  function ratingToStars(num: number) {
    const array = [];

    for (let i = 0; i < num; i++) {
      array.push(
        <Image
          src={Star}
          alt={`Star ${num} of five`}
          key={`Star ${num} of five`}
          style={{ color: "yellow" }}
        />
      );
    }

    return array;
  }

  const testimonials = [
    {
      name: "Ellen",
      statement:
        "My kids enjoyed tutor with Yohan. We look forward to next lesson.",
      source: "Superprof",
      rating: 5,
    },
    {
      name: "John & Nichelle",
      statement: "Five star tutor!",
      source: "Superprof",
      rating: 5,
    },
    {
      name: "Michael",
      statement: "Thanks for letting me be your young padawan!",
      source: "Study Hut Tutoring",
      rating: NaN,
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Testimonials</h1>
      <div className={styles.testimonials}>
        {testimonials.map((el) => {
          return (
            <div className={styles.card}>
              <h3>{el.name}</h3>
              <p>{el.statement}</p>
              {el.rating ? ratingToStars(el.rating) : <p>Not Available</p>}
              <p>From: {el.source}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
