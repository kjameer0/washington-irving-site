import styles from "./banner.module.css";
import { getBannerText } from "@/lib/contentful-api";
export default async function Banner() {
  //get data
  const bannerText = await getBannerText();
  return (
    <div className={styles["banner-wrapper"]}>
      <span className={styles["banner"]}>{bannerText || ""}</span>
    </div>
  );
}
