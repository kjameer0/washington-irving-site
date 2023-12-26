import styles from "./page.module.css";
import HeroImage from "@/components/HeroImage/HeroImage";

import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
  getSinglePageData,
} from "@/lib/contentful-api";
export default async function CounselorCorner() {
  const pageData = await getSinglePageData("7g9C5Xa1vO345Eim31HZaY");
  if (!pageData) {
    throw new Error("no pageData");
  }
  const imgObj = generateImageObject(pageData) as Record<string, string>;
  const { paragraphs, headers, buttons, lists, links } = generateSectionsObject(
    pageData
  ) as sectionObjType;
  return (
    <main className={styles.core}>
      <HeroImage imgLink={imgObj.counselorhero} text={[]} color="white" id="counselor-hero" />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <section className={styles["transform-lives-content"]}>
        <p className={`para-content ${styles["transform-p-first"]}`}>{paragraphs.transformPara.content}</p>
        <p className="para-content">{paragraphs.hesitatePara.content}</p>
      </section>
      <div className={styles["reminder-wrapper"]}>
        <section className={styles["reminder-section"]} id="reminders">
          <h2 className="major-heading">{headers.reminderHeading.mainHeading}</h2>
          <p>{paragraphs.reminderPara1.content}</p>
          <p>{paragraphs.reminderPara2.content}</p>
        </section>
      </div>
      <div className={styles["reminder-wrapper"]}>
        <section className={styles["learning-section"]} id="learning-tips">
          <h2 className="sub-heading">{headers.learningHeading.mainHeading}</h2>
          <img src={imgObj.learningstudentsimg} alt="learning tips for students" />
        </section>
      </div>
      <div className={styles["buttons-wrapper"]}>
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.counselorButton.link}>
          {buttons.counselorButton.buttonText}
        </a>
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.adminButton.link}>
          {buttons.adminButton.buttonText}
        </a>
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.aboutButton.link}>
          {buttons.aboutButton.buttonText}
        </a>
      </div>
    </main>
  );
}

