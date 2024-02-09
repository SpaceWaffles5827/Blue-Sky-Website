"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './index.module.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdoqerjg");
  if (state.succeeded) {
      return <p>We will be in toutch!</p>;
  }
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
    <div className={styles.formGroup}>
        <label htmlFor="email">Email Address</label>
        <input
        className={styles.textInput}
        id="email"
        type="email"
        name="email"
        />
        <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className={styles.error}
        />
    </div>
    <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
        className={styles.textInput}
        id="message"
        name="message"
        />
        <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className={styles.error}
        />
    </div>
    <button type="submit" disabled={state.submitting} className={styles.button}>
        Submit
    </button>
    </form>
  );
}
