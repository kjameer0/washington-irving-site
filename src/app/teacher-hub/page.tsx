import styles from "./page.module.css";
import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
  getSinglePageData,
} from "@/lib/contentful-api";

export default async function StudentCorner() {
  const pageData = await getSinglePageData("4ull73PKgAqB37xT6SkdwB");
  if (!pageData) {
    throw new Error("no pageData");
  }
  const imgObj = generateImageObject(pageData) as Record<string, string>;
  const { paragraphs, headers, buttons } = generateSectionsObject(
    pageData
  ) as sectionObjType;

  return (
    <main className={styles.core} id="teacher-hub">
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <section id="classroom-expectation">
        <h2 className="sub-heading">{headers.expectationHeading.mainHeading}</h2>
        <p className={`para-content ${styles["bold-para"]}`}>{paragraphs.philosophyPara.content}</p>
        <p className={`para-content ${styles["bold-para"]}`}>{paragraphs.remotePara.content}</p>
        <div className={styles["expectation-list-wrapper"]}>
          <img
            src={imgObj.influenceimg}
            alt="The influence of a good teacher can never be erased"
          />
          <div className={styles["expectations-list"]}>
            <h3 className={`para-content ${styles["bold-para"]}`}>
              {headers.teacherExpectationHeading.mainHeading}
            </h3>
            <p className="para-content">{paragraphs.teacherPara1.content}</p>
            <p className="para-content">{paragraphs.teacherPara2.content}</p>
          </div>
        </div>
      </section>
      <section id="teacher-resources" className={styles["teacher-resources"]}>
        <h2 className="major-heading">{headers.resourcesHeading.mainHeading}</h2>
        <div className={styles["resource-button-wrapper"]}>
          <a className="navlink" target="_blank" rel="noreferrer" href={buttons.civicsButton.link}>
            <p>{buttons.civicsButton.buttonText}</p>
          </a>
          <a className="navlink" target="_blank" rel="noreferrer" href={buttons.sesisButton.link}>
            <p>{buttons.sesisButton.buttonText}</p>
          </a>
          <a className="navlink" target="_blank" rel="noreferrer" href={buttons.infohubButton.link}>
            <p>{buttons.infohubButton.buttonText}</p>
          </a>
          <a className="navlink" target="_blank" rel="noreferrer" href={buttons.payrollButton.link}>
            <p>{buttons.payrollButton.buttonText}</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            download="per-session-timesheet"
            href={'https://' + buttons.sessionButton.file}
          >
            <p>{buttons.sessionButton.buttonText}</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            download={'staff-handbook'}
            rel="noreferrer"
            href={'https://' + buttons.handbookButton.file}
          >
            <p>{buttons.handbookButton.buttonText}</p>
          </a>
          <a className="navlink" target="_blank" rel="noreferrer" href={buttons.jupiterButton.link}>
            <p>{buttons.jupiterButton.buttonText}</p>
          </a>
        </div>
      </section>
    </main>
  );
}
