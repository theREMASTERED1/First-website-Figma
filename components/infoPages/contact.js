import styles from "../infoPages/contact.module.css";
import Button from "../buttonfile/button";
import Link from "next/dist/client/link";

export default function Contact() {
  return (
    <>
      <div className={styles.container} id="contact">
        <div className={styles.contactB}>
          <div className={styles.input}>
            <form className={styles.inputF}>
              <div className={styles.head}>
                <div className={styles.hi}>Say Hi</div>
                <div className={styles.subh}>We’d like to talk with you.</div>
              </div>
              <div className={styles.name}>
                <div className={styles.txt}>My Name</div>
                <input placeholder="Full Name" className={styles.Input}></input>
              </div>
              <div className={styles.looking}>
                <div className={styles.txt}>What I Love</div>
                <input
                  placeholder="What you Love"
                  className={styles.Input}
                ></input>
              </div>
              <div className={styles.message}>
                <div className={styles.txt}>Your Message</div>
                <textarea
                  placeholder="I want to say that.."
                  className={styles.msgInput}
                ></textarea>
                <Button buttonName={"Send Message"} />
              </div>
            </form>
          </div>

          <div className={styles.info}>
            <div className={styles.infoBox}>
              <h1>Contact Information</h1>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className={styles.contactNr}>
                <div className={styles.contactInfo}>
                  <div className={styles.contactImg}>
                    <img src="../images/phone.png" />
                  </div>

                  <div className={styles.contactTxt}>(+40) 772 100 200</div>
                </div>

                <div className={styles.contactInfo}>
                  <div className={styles.contactImg}>
                    <img src="../images/email.png" />
                  </div>
                  <div className={styles.contactTxt}>
                    hello@creative-tim.com
                  </div>
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.contactImg}>
                    <img src="../images/map.png" />
                  </div>
                  <div className={styles.contactTxt}>
                    Dyonisie Wolf Bucharest, RO 010458
                  </div>
                </div>
              </div>
              <div className={styles.links}>
                <div className={styles.social}>
                  <Link href={"/"}>
                    <img src="../images/facebookW.png" />
                  </Link>
                </div>
                <div className={styles.social}>
                  <Link href={"/"}>
                    <img src="../images/twitterW.png" />
                  </Link>
                </div>
                <div className={styles.social}>
                  <Link href={"/"}>
                    <img src="../images/Dribble.png" />
                  </Link>
                </div>
                <div className={styles.social}>
                  <Link href={"/"}>
                    <img src="../images/instagramW.png" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
