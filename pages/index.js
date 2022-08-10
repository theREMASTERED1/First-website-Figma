import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Services from "../components/infoPages/services";

import NavBar from "../components/mainPage/navbar/navBar";
import MainBody from "../components/mainPage/body/body";
import OurTeam from "../components/infoPages/ourTeam";
import Contact from "../components/infoPages/contact";
import Footer from "../components/infoPages/footer";

export default function HomePage() {
  return (
    <>
      <div className="container1">
        <NavBar />
        <MainBody />
        <Services />
        <OurTeam />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
