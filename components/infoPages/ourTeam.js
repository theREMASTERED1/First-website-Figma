import Link from "next/link";
import styles from "./ourTeam.module.css";

export default function OurTeam() {
  return (
    <>
      <div className={styles.container} id="ourTeam">
        <div className={styles.infoContainer}>
          <div className={styles.txt}>
            <img src="../images/ourTeam.png" />

            <img src="../images/ourTeam.png" />
            <div className={styles.midtxt}>
              <img src="../images/ourTeamWhite.png" className={styles.midImg} />
            </div>
            <img src="../images/ourTeam.png" />
            <img src="../images/ourTeam.png" />
          </div>

          <div className={styles.other}>
            <div className={styles.table}>
              <div className={styles.rows}>
                <div className={styles.box1}>
                  <img src="../images/guy.png" />
                </div>
                <div className={styles.box1}>
                  <div className={styles.details}>
                    <div className={styles.links}>
                      <div className={styles.social}>
                        <Link href={"/"}>
                          <img src="../images/facebook.png" />
                        </Link>
                      </div>
                      <div className={styles.social}>
                        <Link href={"/"}>
                          <img src="../images/twitter.png" />
                        </Link>
                      </div>
                      <div className={styles.social}>
                        <Link href={"/"}>
                          <img src="../images/linkedIn.png" />
                        </Link>
                      </div>
                      <div className={styles.social}>
                        <Link href={"/"}>
                          <img src="../images/instagram.png" />
                        </Link>
                      </div>
                    </div>
                    <div className={styles.name}>Vaibhav Khanderao</div>
                    <div className={styles.position}>Managing Director</div>
                  </div>
                </div>
              </div>
              <div className={styles.rows}>
                <div className={styles.box1}></div>
                <div className={styles.box1}>
                  <img src="../images/guySQ.png" />
                </div>
              </div>
              <div className={styles.rows}>
                <div className={styles.box1}>
                  <img src="../images/guySQ.png" />
                </div>
                <div className={styles.box1}></div>
              </div>
              <div className={styles.rows}>
                <div className={styles.box1}></div>
                <div className={styles.box1}>
                  <img src="../images/guySQ.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
