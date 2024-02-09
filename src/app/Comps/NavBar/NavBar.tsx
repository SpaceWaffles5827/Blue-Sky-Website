"use client";
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <ul className={styles.ul}>
      {scrolled ? (
          <Image src="/BsLogoSimpleDark.svg" width={100} height={100} alt="Blue Sky Industrial Solutions" className={styles.logo} />
        ) : (
          <Image src="/BsLogoSimple.svg" width={100} height={100} alt="Blue Sky Industrial Solutions" className={styles.logo} />
        )}
        <li className={styles.li}>
          <Link  href="#home" scroll={true}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="#about" scroll={true}>About</Link>
        </li>
        <li className={styles.li}>
          <Link href="#contact" scroll={true}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
