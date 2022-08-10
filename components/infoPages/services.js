import styles from "./services.module.css";

export default function Services() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer} id="services">
          <div className={styles.header}>
            <div className={styles.headtxt}>Our Services</div>
          </div>

          <div className={styles.services}>
            <div className={styles.info}>
              <div className={styles.subHead}>Web Design</div>
              <div className={styles.txt}>
                Clicking pictures really brings out the creative in me.
                Phtography really makes you look and percieve things in a
                different way.
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.subHead}>Social Media Marketing</div>
              <div className={styles.txt}>
                Clicking pictures really brings out the creative in me.
                Phtography really makes you look and percieve things in a
                different way.
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.subHead}>Web Development</div>
              <div className={styles.txt}>
                Clicking pictures really brings out the creative in me.
                Phtography really makes you look and percieve things in a
                different way.
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.subHead}>SEO</div>
              <div className={styles.txt}>
                Clicking pictures really brings out the creative in me.
                Phtography really makes you look and percieve things in a
                different way.
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.subHead}>Digital Branding</div>
              <div className={styles.txt}>
                Clicking pictures really brings out the creative in me.
                Phtography really makes you look and percieve things in a
                different way.
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.subHead}>UI/UX</div>
              <div className={styles.txt}>
                Clicking pictures really brings out the creative in me.
                Phtography really makes you look and percieve things in a
                different way.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
