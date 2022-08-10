import Button from "../../buttonfile/button";
import styles from "./body.module.css";
import Link from "next/link";

export default function MainBody() {
  return (
    <>
      <div className={styles.mainBody}>
        <div className={styles.container}>
          <div className={styles.textBox}>
            <div className={styles.txt}>
              <div className={styles.heading}>Build your Brand</div>

              <div className={styles.intro}>
                we are happy to introduce our new Active collection. Our new
                backs were designed for 00s generations, specifically for the
                moddern professional
              </div>
              <Link href={"#services"}>
                <Button className={styles.button} buttonName={"Know More.."} />
              </Link>
            </div>
          </div>

          <div className={styles.images}>
            <img src="../images/groupImg.png" className={styles.img} />
          </div>
        </div>
      </div>
    </>
  );
}
