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
        <p className={styles["info-wrapper-p"]}>Phone: 212-674-5000 x 11491/11420, or 646-654-9671</p>
      </div>
    </footer>
  );
}
