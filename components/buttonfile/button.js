import styles from "./button.module.css";

export default function Button({ buttonName }) {
  return (
    <>
      <button className={styles.container}>{buttonName}</button>
    </>
  );
}
