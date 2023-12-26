'use client'
import { useState } from "react"
import { useContactForm } from "@/lib/hooks";
import styles from './form.module.css'
export default function Form({link, buttonText} : {link: string; buttonText: string;}) {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const { status, handleFormSubmit } = useContactForm(link, setIsButtonActive);

  return <form className={styles.core} action={link} method="POST" onSubmit={handleFormSubmit} acceptCharset="UTF-8">
  <fieldset>
    <label className={styles["form-label"]} htmlFor="Name">
      <span className={styles["form-label-text"]}>Name*</span>
      <input className={styles["input-field"]} required type="text" name="Name" placeholder="Name" />
    </label>
    <label className={styles["form-label"]} htmlFor="Email">
      <span className={styles["form-label-text"]}>Email*</span>
      <input required name="Email" placeholder="Email" className={styles["input-field"]} />
    </label>
    <label className={styles["form-label"]} htmlFor="Phone">
      <span className={styles["form-label-text"]}>Phone:</span>
      <input className={styles["input-field"]} name="Phone" placeholder="Phone(optional)" />
    </label>
    <label className={styles["form-label"]} htmlFor="Message">
      <span className={`${styles["form-label-text"]} ${styles["form-textarea-label"]}`}>Message*</span>
      <textarea name="Message" required placeholder="Send a message" />
    </label>
    <button type="submit" disabled={!isButtonActive} className={styles["submit-button"]}>
      {isButtonActive ? buttonText : 'Sending...'}
    </button>
  </fieldset>
</form>
}
