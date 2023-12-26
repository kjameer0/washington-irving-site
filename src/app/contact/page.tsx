import HeroImage from "@/components/HeroImage/HeroImage";
import styles from "./page.module.css";
import Form from "@/components/Form/Form";
import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
  getSinglePageData,
} from "@/lib/contentful-api";
//styles

export default async function Contact() {
  const pageData = await getSinglePageData("66NBO5u9RxH1aZmxbEObDF");
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
        imgLink={imgObj.admissionshero}
        id="contact-hero"
        text={[]}
        color="white"
      />
      <h1 className="major-heading">{headers.pageHeading.mainHeading}</h1>
      <p className="para-content">{paragraphs.doorPara.content}</p>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />
      <Form
        link={buttons.sendMessageButton.link || ""}
        buttonText={buttons.sendMessageButton.buttonText}
      />
      <p className="para-content">{paragraphs.allowPara.content}</p>
      <div className={styles["green-separator"]}></div>
      <img
        className={styles["location-img"]}
        src={imgObj.mapimg}
        alt="Washington Irving YABC location"
      />
      <p className={`para-content ${styles["address-p"]}`}>
        {paragraphs.addressPara.content}
        <br />
        {paragraphs.adminCellPara.content}
        <br /> {paragraphs.officePhonePara.content}
      </p>
    </main>
  );
}
