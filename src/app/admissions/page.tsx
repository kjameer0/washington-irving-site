import styles from "./page.module.css";
import HeroImage from "@/components/HeroImage/HeroImage";
import { richTextLinkOptions } from "@/lib/rich-text-options";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as ContentfulDocumentType } from "@contentful/rich-text-types";
import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
  getSinglePageData,
} from "@/lib/contentful-api";

export default async function Admissions() {
  const pageData = await getSinglePageData("7GJQyJLELJDKG8EWm744KA");
  if (!pageData) {
    throw new Error("no pageData");
  }
  const imgObj = generateImageObject(pageData) as Record<string, string>;
  const { paragraphs, headers, buttons, lists, links } = generateSectionsObject(
    pageData
  ) as sectionObjType;
  return (
    <main className={styles.core} id="admissions-page">
      <HeroImage
        text={[]}
        color="white"
        imgLink={imgObj.admissionshero}
        id="admissions-hero"
      />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <section className={styles["register-section"]} id="open-enrollment">
        <h2 className="sub-heading">
          {headers.openEnrollmentHeading.mainHeading}
        </h2>
        <p className="para-content">
          {paragraphs.enrollmentProcessPara.content}
        </p>
      </section>
      <section className={styles["admissions-info-section"]} id="admissions-information">
        <h2 className="sub-heading">
          {headers.admissionsInfoHeading.mainHeading}
        </h2>
        <p className="para-content">{paragraphs.educationPara.content}</p>
      </section>
      <div className={styles["requirements-wrapper"]}>
        <section className={styles["requirements"]} id="academic-requirements">
          <header>
            <h3 className={styles["requirements-h3"]}>
              {headers.requirementHeading.mainHeading}
            </h3>
            <p className={styles["requirements-sub"]}>
              {headers.fullTimeHeading.mainHeading}
            </p>
          </header>
          <ul className={styles["requirements-ul"]}>
            {lists.fullTimeList.listContent.map((item: string) => {
              return (
                <li key={crypto.randomUUID()} className="para-content">
                  {item}
                </li>
              );
            })}
          </ul>
          <p className="para-content">
            {paragraphs.sharedInstructionPara.content}
          </p>
        </section>
      </div>
      <section className={styles["enroll-section"]} id="how-to-enroll">
        <header>
          <h2 className={styles["enroll-section-header"]}>
            {headers.regularHeading.mainHeading}
          </h2>
          <p className={styles["enroll-section-header"]}>
            {headers.howHeading.mainHeading}
          </p>
        </header>
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
        <p className="para-content">{paragraphs.applicationPara.content}</p>
        <p className={styles["enroll-step-bold-p"]}>
          {paragraphs.enrollmentContactPara.content}
        </p>
        <h3 className={styles["enroll-step-h3"]}>{headers.step3Heading.mainHeading}</h3>
        <p className={styles["enroll-step-bold-p"]}>{paragraphs.callPara.content}</p>
        <p className="para-content">{paragraphs.pendingPara.content}</p>
        <ul className={styles["step-ul"]}>
          {lists.phoneNumberList.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="para-content">{paragraphs.voicemailPara.content}</p>
        <h3 className={styles["enroll-step-h3"]}>{headers.step4Heading.mainHeading}</h3>
        <p className={styles["enroll-step-bold-p"]}>
          {paragraphs.acceptancePara.content}{" "}
        </p>
        <ul className={styles["step-ul"]}>
          {lists.formList.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ul>
        {documentToReactComponents(
          links.studentSupportLink as ContentfulDocumentType,
          richTextLinkOptions
        )}
      </section>
      <div className={styles["y-forms"]}>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          href={buttons.referralFormButton.link}
        >
          {buttons.referralFormButton.buttonText}
        </a>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          download="Fillable-y1-form"
          href={"https://" + buttons.y1Form.file}
        >
          {buttons.y1Form.buttonText}
        </a>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          download="Fillable-y2-form"
          href={"https://" + buttons.y2Form.file}
        >
          {buttons.y2Form.buttonText}
        </a>
      </div>
      <section className={styles["faq-section"]} id="frequently-asked-questions">
        <h2 className="sub-heading">{headers.faqHeading.mainHeading}</h2>
        <section className={`${styles["faq-question-section"]} ${styles["regular-instruction"]}`}>
          <h3 className={styles["faq-h3"]}>
            {headers.regularQuestionHeading.mainHeading}
          </h3>
          <p>{paragraphs.regularQuestionPara1.content}</p>
          <p>{paragraphs.regularQuestionPara2.content}</p>
        </section>
        <section className={`${styles["faq-question-section"]} ${styles["shared-instruction"]}`}>
          <h3 className={styles["faq-h3"]}>
            {headers.sharedQuestionHeading.mainHeading}
          </h3>
          <p>{paragraphs.sharedQuestionPara1.content}</p>
          <p>{paragraphs.sharedQuestionPara2.content}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={buttons.enrollSharedButton.link}
          >
            <p>{buttons.enrollSharedButton.buttonText}</p>
          </a>
        </section>
      </section>
    </main>
  );
}
