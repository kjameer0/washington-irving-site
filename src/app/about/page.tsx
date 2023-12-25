import HeroImage from "@/components/HeroImage/HeroImage";
//utils
import { richTextLinkOptions } from "@/lib/rich-text-options";
import styles from "./page.module.css";
//hooks
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getSinglePageData, getGraduateCarousels } from "@/lib/contentful-api";
import GraduateCarouselSelector from "@/components/GraduateCarouselSelector/GraduateCarouselSelector";
import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
} from "@/lib/contentful-api";
//styles
import { Document as ContentfulDocumentType } from "@contentful/rich-text-types";

export default async function About() {
  const pageData = await getSinglePageData("2UE2gLOJhURbCW6YffSfPQ");
  const graduateCarouselsData = await getGraduateCarousels();
  if (!pageData || !graduateCarouselsData) {
    throw new Error("no pageData");
  }
  const { carousels, latestYear } = graduateCarouselsData;
  const imgObj = generateImageObject(pageData) as Record<string, string>;
  const { paragraphs, headers, buttons, lists, links } = generateSectionsObject(
    pageData
  ) as sectionObjType;
  return (
    <main className={styles.core}>
      <HeroImage
        id="students-sitting-hero"
        imgLink={imgObj.abouthero}
        text={[]}
        color="white"
      />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <section className={styles["attend-info"]}>
        <h2 className={styles["attend-info-h2"]}>
          {headers.registrationHeading.mainHeading}
        </h2>
        <p className="para-content">{paragraphs.registrationPara.content}</p>
        <p className={styles["attend-info-h2"]}>
          {paragraphs.orientationPara.content}
        </p>
        <p className="para-content">
          {paragraphs.registrationLocationPara.content}
        </p>
        <h2 className={styles["attend-info-h2"]}>
          {documentToReactComponents(
            links.zoomLink as ContentfulDocumentType,
            richTextLinkOptions
          )}
        </h2>
        <p className="para-content">
          {paragraphs.inPersonRegistrationPara.content}
        </p>
        <h2 className={styles["attend-info-h2"]}>
          {headers.openHouseHeading.mainHeading}
        </h2>
        <p className="para-content">
          {paragraphs.fallTermPara.content} <br></br>
          {paragraphs.springTermPara.content}
        </p>
        <a href="/contact" className={"navlink"}>
          {headers.attendButtonLabel.mainHeading}
        </a>
        <br className={styles["link-line-break"]} />
        <a href="/admissions" className={"navlink"}>
          {headers.admissionsButtonLabel.mainHeading}
        </a>
      </section>
      <div className={styles["line-separate"]}></div>
      <section id="are-we-a-fit" className={styles["good-fit-section"]}>
        <header>
          <h2 className="major-heading">{headers.fitHeading.mainHeading}</h2>
          <p className={"sub-heading" + " " + styles["good-fit-header-p"]}>
            {headers.fitHeading.subHeading}
          </p>
        </header>
        <section
          className={styles["requirements"]}
          id="eligibility-requirements"
        >
          <h4 className={styles["requirements-h4"] + " " + "sub-heading"}>
            {headers.eligibilityHeading.mainHeading}
          </h4>
          <ul className={styles["requirements-ul"]}>
            {lists.eligibilityList.listContent.map((item: string) => {
              return (
                <li
                  key={crypto.randomUUID()}
                  className={"para-content" + " " + styles["requirements-li"]}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </section>
        <p className="para-content">{paragraphs.studentPara.content}</p>
        <p className="para-content">{paragraphs.servePara.content}</p>
        <p className="para-content">{paragraphs.supportPara.content}</p>
      </section>
      <div className={styles["line-separate"]}></div>
      <h2 className="major-heading" id="meet-our-graduates">
        {headers.graduateHeading.mainHeading}
      </h2>
      <div className={styles["carousel-wrapper"]}>
        <GraduateCarouselSelector
          carousels={carousels}
          mostRecentYear={latestYear}
        />
      </div>
    </main>
  );
}
