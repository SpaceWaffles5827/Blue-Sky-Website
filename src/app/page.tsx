import ContactForm from "./Comps/NavBar/ContactForm/ContactForm";
import NavBar from "./Comps/NavBar/NavBar";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar/>
      <main className={styles.main}>
        <div id="home" className={styles.sectionOne}>
          <div className={styles.left}>
            <h1 className={styles.headerTextTop}>Blue Sky</h1>
            <h2 className={styles.headerTextBottom}>Industrial Solutions</h2>
            <p className={styles.slogan}>Simplifying your automation solutions.</p>
          </div>
          <div className={styles.right}>
            <video
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
            src="/IMG_0692.MOV"
            />
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.left}>
            <video
              className={styles.video}
              autoPlay
              loop
              muted
              playsInline
              src="/IMG_0820.MOV"
            />
          </div>
          <div className={styles.right}>
          <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image src="/bolt_FILL0_wght400_GRAD0_opsz24.svg" alt="pharmaIcon" width={100} height={100}/>
              <h2>Boost Your Efficiency</h2>
              <p>Speed up your production with automation. Our solutions are easy to integrate and make your operations faster and more reliable.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image src="/tune_FILL0_wght400_GRAD0_opsz24.svg" alt="pharmaIcon" width={100} height={100}/>
              <h2>Designed For You</h2>
              <p>We create automation systems tailored to your business needs. Improve your workflow and scale your operations effortlessly.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image src="/pill_FILL0_wght400_GRAD0_opsz24.svg" alt="pharmaIcon" width={100} height={100}/>
              <h2>Pharma Automation</h2>
              <p>Our automated solutions for the pharmaceutical industry ensure your processes meet high standards of safety and compliance.</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div id="about" className={styles.aboutSection}>
          <h2>About Us</h2>
          <p>Blue Sky Industrial Solutions has been at the forefront of pharmaceutical automation for over a decade. Our team of experts combines innovative technologies with in-depth industry knowledge to deliver customized solutions that meet the unique needs of our clients.</p>
        </div>
        <div id="contact" className={styles.contactSection}>
        <div className={styles.left}>
          <h2>Contact Us</h2>
          <p>Ready to transform your operations with automation?</p>
          <p>Email: jhartwig@blueskyindsol.com</p>
          <p>Phone: +256 529 1351</p>
        </div>
        <div className={styles.right}>
          <ContactForm/>
        </div>
      </div>
      </main>
    </>
  );
}
