import styles from "./page.module.css";
import MainButton from "@/components/MainButton/MainButton";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richTextLinkOptions } from "@/lib/rich-text-options";
import { Document as ContentfulDocumentType } from "@contentful/rich-text-types";
import {
  generateSectionsObject,
  sectionObjType,
  getSinglePageData,
} from "@/lib/contentful-api";

export default async function SharedAdmissions() {
  const pageData = await getSinglePageData("2GsVyoz0lPdUkLQKV30aW5");
  if (!pageData) {
    throw new Error("no pageData");
  }
  const { paragraphs, headers, buttons, lists, links } = generateSectionsObject(
    pageData
  ) as sectionObjType;
  return (
    <main className={styles.core}>
    <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
    <section className={styles["shared-elaboration-section"]}>
      <p className="para-content">{paragraphs.instructionPara1.content} </p>
      <p className="para-content">{paragraphs.instructionPara2.content}</p>
      <p className="para-content">{paragraphs.instructionPara3.content}</p>
      <div className="para-content">
        {documentToReactComponents(links.openHouseLink as ContentfulDocumentType, richTextLinkOptions)}
      </div>
    </section>
    <section className={styles["enroll-section"]} id="how-to-enroll">
      <h2 className={styles["enroll-section-h2"]}>
        {headers.sharedHeading.mainHeading} <br />
        {headers.howHeading.mainHeading}
      </h2>
      <h3 className={styles["enroll-step-h3"]}>{headers.step1Heading.mainHeading}</h3>
      <p className="para-content">{paragraphs.step1Para.content}</p>
      <h3 className={styles["enroll-step-h3"]}>{headers.step2Heading.mainHeading}</h3>
      <p className={styles["enroll-step-bold-p"]}>{paragraphs.step2Para.content}</p>
      <ul className={styles["step-ul"]}>
        {lists.step2List.listContent.map((item: string) => {
          return (
            <li key={crypto.randomUUID()} className="para-content">
              {item}
            </li>
          );
        })}
      </ul>
      <p className="para-content">{paragraphs.submitPara.content}</p>
      <p className={styles["enroll-step-bold-p"]}>{paragraphs.understandPara.content}</p>
      <h3 className={styles["enroll-step-h3"]}>{headers.step3Heading.mainHeading}</h3>
      <p className={styles["enroll-step-bold-p"]}>{paragraphs.step3Para1.content}</p>
      <p className="para-content">{paragraphs.step3Para2.content}</p>
      <ul className={styles["step-ul"]}>
        {lists.phoneList.listContent.map((item: string) => {
          return (
            <li key={crypto.randomUUID()} className="para-content">
              {item}
            </li>
          );
        })}
      </ul>
      <p className="para-content">{paragraphs.voicemailPara.content}</p>
      <h3 className={styles["enroll-step-h3"]}>{headers.step4Heading.mainHeading}</h3>
      <p className={styles["enroll-step-bold-p"]}>{paragraphs.step4Para1.content}</p>
      <ul className={styles["step-ul"]}>
        {lists.formList.listContent.map((item: string) => {
          return (
            <li key={crypto.randomUUID()} className="para-content">
              {item}
            </li>
          );
        })}
      </ul>
      <p className={styles["enroll-step-bold-p"]}>{paragraphs.agePara.content}</p>
    </section>
    <div className={styles["form-buttons-wrapper"]}>
      <MainButton>
        <a href={buttons.counselorForm.link} target="_blank" rel="noreferrer">
          {buttons.counselorForm.buttonText}
        </a>
      </MainButton>
      <MainButton>
        <a
          download="S1-form"
          target="_blank"
          rel="noreferrer"
          href={'https://' + buttons.s1Form.file}
        >
          {buttons.s1Form.buttonText}
        </a>
      </MainButton>
      <MainButton>
        <a
          download="S2-form"
          target="_blank"
          rel="noreferrer"
          href={'https://' + buttons.s2Form.file}
        >
          {buttons.s2Form.buttonText}
        </a>
      </MainButton>
    </div>
  </main>
  );
}
