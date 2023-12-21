import styles from "./heroimage.module.css";
export default function HeroImage({
  imgLink,
  text,
  color,
  id,
}: {
  imgLink: string;
  text: string[];
  color: "white" | "black";
  id: string;
}) {
  return (
    <div
      id={id}
      style={{ backgroundImage: `url(${imgLink})` }}
      className={styles["hero-image-container"]}
    >
      <div className={styles["words-wrapper"]}>
        {text.map((word) => (
          <p className={styles["single-word"]} key={word}>
            {word}
          </p>
        ))}
      </div>
    </div>
  );
}
