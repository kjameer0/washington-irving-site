import styles from './footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.core}>
      <div className={styles["logo-wrapper"]}>
        <p className={styles["address-p"]}>
          Washington Irving YABC <br /> 40 Irving Place NY, NY 10003
        </p>
      </div>
      <div className={styles["info-wrapper"]}>
        <p className={styles["info-wrapper-p"]}>E: aayetiw@schools.nyc.gov | F: 646-654-9672</p>
        <p className={styles["info-wrapper-p"]}>Site Administrator Cell: 929-359-3750</p>
        <p className={styles["info-wrapper-p"]}>Site Developer: Khalid Jameer</p>
        <p className={styles["info-wrapper-p"]}>Email: kjameer0@gmail.com</p>
      </div>
    </footer>
  );
}
