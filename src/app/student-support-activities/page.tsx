import HeroImage from "@/components/HeroImage/HeroImage";
import styles from "./page.module.css";
import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
  getSinglePageData,
} from "@/lib/contentful-api";
//styles

export default async function StudentSupportCenter() {
  const pageData = await getSinglePageData("4nugErvcvdgZUewlAhwkvg");
  if (!pageData) {
    throw new Error("no pageData");
  }
  const imgObj = generateImageObject(pageData) as Record<string, string>;
  const { paragraphs, headers, buttons, lists, links } = generateSectionsObject(
    pageData
  ) as sectionObjType;
  return (
    <main className={styles.core}>
      <HeroImage
        text={[]}
        imgLink={imgObj.missionhero}
        id="mission-society-hero"
        color="white"
      />
      <h1 className={"major-heading"}>{headers.pageTitle.mainHeading}</h1>
      <p className="para-content">{paragraphs.partnerPara.content}</p>
      <section id="forms" className={styles["forms-section"]}>
        <HeroImage
          imgLink={imgObj.learnhero}
          text={[
            headers.learnHeading.mainHeading,
            headers.learnHeading.subHeading || "",
          ]}
          color="white"
          id={"learn-to-work-hero"}
        />
        <div className={styles["buttons-container"]}>
          <div className={styles["buttons-list-wrapper"]}>
            <h3 className="sub-heading">{headers.underHeading.mainHeading}</h3>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.underLtwButton.link}
            >
              {buttons.underLtwButton.buttonText}{" "}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.underPhotoButton.link}
            >
              {buttons.underPhotoButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.underTransferButton.link}
            >
              {buttons.underTransferButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.underContactButton.link}
            >
              {buttons.underContactButton.buttonText}
            </a>
          </div>
          <div className={styles["buttons-list-wrapper"]}>
            <h3 className="sub-heading">{headers.overHeading.mainHeading}</h3>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.overLtwButton.link}
            >
              {buttons.overLtwButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.overPhotoButton.link}
            >
              {buttons.overPhotoButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.overTransferButton.link}
            >
              {buttons.overTransferButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.overContactButton.link}
            >
              {buttons.overContactButton.buttonText}
            </a>
          </div>
        </div>
      </section>
      <section id="services" className={styles["services"]}>
        <HeroImage
          imgLink={imgObj.serviceshero}
          text={[
            headers.servicesHeading.mainHeading,
            headers.servicesHeading.subHeading || "",
          ]}
          color="white"
          id="services-hero"
        />
        <section
          className={styles["service-list-section"]}
          id="college-and-career-readiness"
        >
          <h3 className="sub-heading">{headers.collegeHeading.mainHeading}</h3>
          <ul className={styles["service-list"]}>
            {lists.collegeList.listContent.map((item: string) => {
              return (
                <li
                  key={crypto.randomUUID()}
                  className={`${styles["service-list-li"]} para-content`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </section>
        <div className="green-separator"></div>
        <section id="activities" className={styles["service-list-section"]}>
          <h3 className="sub-heading">
            {headers.activitiesHeading.mainHeading}
          </h3>
          <ul className={styles["service-list"]}>
            {lists.activitiesList.listContent.map((item: string) => {
              return (
                <li
                  key={crypto.randomUUID()}
                  className={`${styles["service-list-li"]} para-content`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </section>
        <div className="green-separator"></div>
        <section
          id="academic-family-outreach"
          className={styles["service-list-section"]}
        >
          <h3 className="sub-heading">{headers.outreachHeading.mainHeading}</h3>
          <ul className={styles["service-list"]}>
            {lists.outreachList.listContent.map((item: string) => {
              return (
                <li
                  key={crypto.randomUUID()}
                  className={`${styles["service-list-li"]} para-content`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </section>
        <div className="green-separator"></div>
        <section
          id="student-outreach"
          className={styles["service-list-section"]}
        >
          <h3 className="sub-heading">
            {headers.studentOutreachHeading.mainHeading}
          </h3>
          <ul className={styles["service-list"]}>
            {lists.studentOutreachList.listContent.map((item: string) => {
              return (
                <li
                  key={crypto.randomUUID()}
                  className={`${styles["service-list-li"]} para-content`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </main>
  );
}
