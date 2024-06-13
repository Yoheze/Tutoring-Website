"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import right from "../../../public/right.svg";
import left from "../../../public/left.svg";

export default function Availability() {
  // First subarray = Sunday, numbers inside are hours (military time)
  const recurringDates = [
    [],
    [15, 16, 17, 18, 19],
    [14, 15, 16],
    [],
    [11, 12, 13, 14, 15, 16],
    [],
    [],
  ];

  // Use state to keep track of the current week
  const [week, setWeek] = useState(0);

  function displayDays() {
    const today = new Date();
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

    function calculateOtherDays(num: number) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + (num - dayOfWeek) + week * 7);

      const day = nextDay.getDate();
      const month = nextDay.getMonth() + 1; // Get month from dynamically calculated date
      return dayNames[num % 7] + " " + month + "/" + day;
    }

    return dayNames.map((el, i) => {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + (i - dayOfWeek) + week * 7);
      const day = nextDay.getDate();
      const month = nextDay.getMonth() + 1;

      if (dayOfWeek === i % 7 && week === 0)
        return (
          <th className={styles.yellow} key={`day ${i % 7} of week ${week}`}>
            {el + " " + month + "/" + day}
          </th>
        );
      else
        return (
          <th key={`day ${i % 7} of week ${week}`}>{calculateOtherDays(i)}</th>
        );
    });
  }

  function display(hour: number) {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const currentHour = today.getHours();

    const cells = [];

    for (let i = 0; i < 7; i++) {
      const isPast =
        (i < dayOfWeek && week === 0) ||
        (i === dayOfWeek && hour <= currentHour && week === 0);
      const isRecurring = recurringDates[i % 7].includes(hour);

      if (isPast) {
        cells.push(
          <td className={styles.gray} key={`hour: ${hour}, day: ${i}`}></td>
        );
      } else if (isRecurring) {
        cells.push(
          <td className={styles.red} key={`hour: ${hour}, day: ${i}`}></td>
        );
      } else if (
        week === 1 &&
        i === 5 &&
        (hour === 15 || hour === 16 || hour === 17)
      ) {
        // This will check if it's the second week, Friday, and 4pm (One Lesson)
        cells.push(
          <td className={styles.yellow} key={`hour: ${hour}, day: ${i}`}></td>
        );
      } else {
        cells.push(
          <td key={`hour: ${hour}, day: ${i}`} className={styles.green}></td>
        );
      }
    }

    return cells;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Availability:</h1>
      <div className={styles.tableArrows}>
        <Image
          src={left}
          alt="left arrow"
          className={styles.arrow}
          onClick={() => {
            if (week > 0) {
              setWeek(week - 1);
            }
          }}
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
            {[...Array(11)].map((_, index) => {
              const hour = index + 10;
              if (hour === 11) {
                return (
                  <tr key={`row-${hour}`}>
                    <td>11am-12pm</td>
                    {display(hour)}
                  </tr>
                );
              } else if (hour === 10) {
                return (
                  <tr key={`row-${hour}`}>
                    <td>10am-11am</td>
                    {display(hour)}
                  </tr>
                );
              } else if (hour === 12) {
                return (
                  <tr key={`row-${hour}`}>
                    <td>12pm -1pm</td>
                    {display(hour)}
                  </tr>
                );
              }
              return (
                <tr key={`row-${hour}`}>
                  <td>{`${hour - 12}pm-${hour - 11}pm`}</td>
                  {display(hour)}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Image
          src={right}
          alt="right arrow"
          className={styles.arrow}
          onClick={() => {
            if (week < 3) {
              setWeek(week + 1);
            }
          }}
          key="right arrow"
        />
      </div>
      <div className={styles.legend}>
        <h3>Legend:</h3>
        <div className={`${styles.red} ${styles.legendColor}`}>
          <p>Recurring Reserved Lessons/Obligations</p>
        </div>
        <div className={`${styles.yellow} ${styles.legendColor}`}>
          <p>One time lesson</p>
        </div>
        <div className={`${styles.green} ${styles.legendColor}`}>
          <p>Open Spot</p>
        </div>
      </div>
    </>
  );
}
