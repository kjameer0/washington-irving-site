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

export default async function CounselorContactForm() {
  const pageData = await getSinglePageData("6t2NSllTkjn6ThupQQ9d9g");
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
        color="white"
        imgLink={imgObj.formhero + + "?w=1400"}
        id="counselor-contact-hero"
      />
      <h1 className="major-heading">{headers.adminContactHeading.mainHeading}</h1>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />
      <Form link={buttons.adminSubmitButton.link || ''} buttonText={buttons.adminSubmitButton.buttonText} />
      <p className="para-content">{paragraphs.allowPara.content}</p>
    </main>
  );
}
