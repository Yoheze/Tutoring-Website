import styles from "./price.module.css";

export default function Price() {
  return (
    <div className={styles.price}>
      <h1>Price: </h1>
      <h3>$25/hr + $1/mile traveled</h3>
      <h3>I will charge $12.50/hr for Physics and Calculus</h3>
      <h4>Notes:</h4>
      <ul>
        <li>Travel is limited up to 25 miles</li>
        <li>There is no travel fee for online lessons</li>
        <li>
          This is based on the USD (United States Dollar) and adjustments are
          required for other forms of currency
        </li>
      </ul>
    </div>
  );
}
