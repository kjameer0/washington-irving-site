import styles from "./staff-image.module.css";
//all data associated with individual staff member
export interface StaffImageType {
  direction: "left" | "right";
  imgUrl: string;
  name: string;
  role: string;
}

export default function StaffImage({
  direction,
  imgUrl,
  name,
  role,
}: StaffImageType) {
  return (
    <div className={styles.core}>
      <div
        className={styles["img-wrapper"]}
        style={{ order: direction === "left" ? "1" : "2" }}
      >
        <img
          loading="lazy"
          src={imgUrl}
          alt={name}
          className={styles["staff-img"]}
        />
      </div>
      <div
        className={styles["staff-info"]}
        style={{ order: direction === "right" ? "1" : "2" }}
      >
        <ul className={styles["staff-info-ul"]}>
          <li className={styles["staff-info-li"] + " " + styles["staff-name"]}>
            {name}
          </li>
          <li className={styles["staff-info-li"] + " " + styles["staff-role"]}>
            {role || ""}
          </li>
        </ul>
      </div>
    </div>
  );
}
