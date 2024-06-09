import styles from "./page.module.css";

export default function Availability() {
  // Create a function where we organize dates wth the names of the days
  function displayDays() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    console.log(today, day, month);

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
    console.log(dayName);

    function calculateOtherDays(num: number) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + (num - dayOfWeek));

      console.log(nextDay);

      const day = nextDay.getDate();
      const month = today.getMonth() + 1;
      return dayNames[dayOfWeek] + " " + month + "/" + day;
    }

    return dayNames.map((el, i) => {
      if (dayOfWeek === i)
        return (
          <th className={styles.yellow}>{el + " " + month + "/" + day}</th>
        );
      else return <th>{calculateOtherDays(i)}</th>;
    });
  }

  return (
    <>
      <h1>Availabilty:</h1>
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
    </>
  );
}
