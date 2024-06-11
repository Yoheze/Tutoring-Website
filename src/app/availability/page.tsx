"use client";

import styles from "./page.module.css";
import Image from "next/image";
import right from "../../../public/right.svg";
import left from "../../../public/left.svg";

export default function Availability() {
  // Create a function where we organize dates wth the names of the days
  let week: number = 0;

  function displayDays() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dayOfWeek = today.getDay(); // Gives number from 0-6
    const dayName = dayNames[dayOfWeek]; // Grabs name of day of week from dayNames array

    function calculateOtherDays(num: number) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + (num - dayOfWeek));

      const day = nextDay.getDate();
      const month = today.getMonth() + 1;
      return dayNames[num % 7] + " " + month + "/" + day;
    }

    return dayNames.map((el, i) => {
      if (dayOfWeek === i % 7)
        return (
          <th className={styles.yellow} key={`day ${i % 7} of week ${week}`}>
            {el + " " + month + "/" + day}
          </th>
        );
      else
        return (
          <th key={`day ${i % 7} of week ${week}`}>
            {calculateOtherDays(i + week * 7)}
          </th>
        );
    });
  }

  return (
    <>
      <h1>Availabilty:</h1>
      <div className={styles.tableArrows}>
        <Image
          src={left}
          alt="left arrow"
          className={styles.arrow}
          key="left arrow"
        />
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ border: "none" }}></th>
              {displayDays()}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10am-11am</td>
              <td className={styles.green}></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11am-12pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12pm-1pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1pm-2pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2pm-3pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3pm-4pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4pm-5pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5pm-6pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6pm-7pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7pm-8pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8pm-9pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <Image
          src={right}
          alt="right arrow"
          className={styles.arrow}
          onClick={() => {
            week += 1;
          }}
          key="right arrow"
        />
      </div>
      <h3>Legend:</h3>
    </>
  );
}
