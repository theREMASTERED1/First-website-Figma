import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.image}>
            <div className={styles.img}>
              <img src="../images/guySQ.png" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.detailsHead}>
              <div className={styles.likes}>
                <div className={styles.static}>
                  <a className={styles.number}>323</a>
                  <a className={styles.txt}>Posts</a>
                </div>
                <div className={styles.static}>
                  <a className={styles.number}>3.5k</a>
                  <a className={styles.txt}>Followers</a>
                </div>

                <div className={styles.static}>
                  <a className={styles.number}>260</a>
                  <a className={styles.txt}>Following</a>
                </div>
              </div>
              <button className={styles.button}>Follow</button>
            </div>
            <div className={styles.detailsMain}>
              <a className={styles.detailsTxt}>
                Decisions: If you can’t decide, the answer is no. If two equally
                difficult paths, choose the one more painful in the short term
                (pain avoidance is creating an illusion of equality). Choose the
                path that leaves you more equanimous.
              </a>
              <Link href={"/"} className={styles.detailsLink}>
                <a className={styles.detailsLinktxt}>
                  More About Me
                  <img src="../images/arrow.png" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.foot}>
          <div className={styles.footTxt}>
            <div className={styles.left}>
              <div className={styles.leftTxt}>
                <a className={styles.leftTxtHead}>SOFT</a>
                <div className={styles.leftLinks}>
                  <Link href={"/"}>Home</Link>
                  <Link href={"/#ourTeam"}>About</Link>
                  <Link href={"/"}>Blog</Link>
                  <Link href={"/#services"}>Services</Link>
                </div>
              </div>
              <a className={styles.leftTxt}>
                Copyright © 2021 Soft by Creative Tim.
              </a>
            </div>
            <div className={styles.right}>
              <a className={styles.rightTxt}>
                The reward for getting on the stage is fame. The price of fame
                is you can’t get off the stage.
              </a>
              <a className={styles.rightIcon}>
                <div className={styles.rightlink}>
                  <img src="../images/dribbleG.png" />
                </div>
                <div className={styles.rightlink}>
                  <img src="../images/githubG.png" />
                </div>
                <div className={styles.rightlink}>
                  <img src="../images/pintrestG.png" />
                </div>
                <div className={styles.rightlink}>
                  <img src="../images/twitterG.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
