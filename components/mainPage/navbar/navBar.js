import styles from "./navBar.module.css";
import Button from "../../buttonfile/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburgerOn() {
    if (hamburgerOpen) {
      setHamburgerOpen(false);
    } else {
      setHamburgerOpen(true);
    }
  }

  return (
    <>
      <div className={styles.mainNav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="../images/infocious.png" className={styles.image} />
          </div>

          <div className={styles.navLinks}>
            <div className={styles.hamburger} onClick={toggleHamburgerOn}>
              <div className={styles.burgerBox} id="burgerBox1">
                <img src={"../images/menu.png"} className={styles.burger} />
              </div>
            </div>

            <div className={styles.pageLinks}>
              <Link href={"/"}>Home</Link>
              <Link href={"#ourTeam"}>About us</Link>
              <Link href={"#services"}>Services</Link>
            </div>
            <Link href={"#contact"}>
              <div className={styles.wrapper}>
                <Button buttonName={"Contact us"} />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.hamList}>
          {hamburgerOpen ? (
            <div className={styles.pageLinks1}>
              <Link href={"#contact"} onClick={toggleHamburgerOn}>
                Contact us
              </Link>
              <Link href={"#ourTeam"} onClick={toggleHamburgerOn}>
                About us
              </Link>
              <Link href={"#services"} onClick={toggleHamburgerOn}>
                Services
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
