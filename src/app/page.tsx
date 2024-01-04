import styles from "./page.module.css";
import HeroImage from "@/components/HeroImage/HeroImage";
import Carousel from "@/components/Carousel/Carousel";
import ExportedImage from "next-image-export-optimizer";
import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
  getSinglePageData,
  getSingleCarousel
} from "@/lib/contentful-api";
export default async function Home() {
  const pageData = await getSinglePageData("7yhGH9U8xAnRRgnC76CcAC");
  const carousel = await getSingleCarousel("6HNgzL9333zge8eEXDZV9R");
  if (!pageData) {
    throw new Error("no pageData");
  }
  const imgObj = generateImageObject(pageData) as Record<string, string>;
  const { paragraphs, headers, buttons } = generateSectionsObject(
    pageData
  ) as sectionObjType;
  return (
    <main className={styles.core}>
      <HeroImage
        id="school-facade"
        imgLink={imgObj.homehero + "?w=1400"}
        text={[]}
        color="white"
      />
      <h1 className={`major-heading ${styles["restore-margin"]}`}>
        {headers.pageTitle.mainHeading}
      </h1>
      <div
        className={`${styles["pre-reg-box"]} ${styles["info-box"]} ${styles["restore-margin"]}`}
      >
        <h2 className="sub-heading">
          <u>
            <strong>{headers.registrationSeasonHeading.mainHeading}</strong>
          </u>
        </h2>
        <p className={styles["reg-date"]}>
          {paragraphs.registrationStart.content}
        </p>
        <p className={styles["reg-date"]}>
          {paragraphs.registrationEnd.content}
        </p>
      </div>
      <div
        className={`${styles["class-start-box"]} ${styles["info-box"]} ${styles["restore-margin"]}`}
      >
        <h2 className="sub-heading">
          <u>
            <strong>{headers.classesBeginHeading.mainHeading}</strong>
          </u>
        </h2>
        <p className={styles["reg-date"]}>
          {paragraphs.classesBeginDate.content}
        </p>
      </div>
      <section className={styles["registration-date-section"]}>
        <h2 className="sub-heading">{buttons.yabcVideoEmbed.buttonText}</h2>
        <iframe
          className={styles["yabc-embed"]}
          title={buttons.yabcVideoEmbed.buttonText}
          src={buttons.yabcVideoEmbed.link}
          allow="autoplay"
        ></iframe>
        <p className={`${styles["registration-range"]} smaller-med-heading`}>
          {paragraphs.inPersonRegistrationPara.content}
        </p>
        <p className="para-content">{paragraphs.welcomePara1.content}</p>
        <p className="para-content">{paragraphs.welcomePara2.content}</p>
        <p className="para-content">{paragraphs.welcomePara3.content}</p>
      </section>
      <aside className={styles["home-grad-wrapper"]}>
        <ExportedImage
          width={175}
          height={300}
          src={imgObj.missionimg}
          alt="principal of the school shaking hands with a graduating student"
        />
        <div className={styles["grad-aside-p-wrapper"]}>
          <p className={`para-content ${styles["ital-para-text"]}`}>
            {paragraphs.servicePara1.content}
          </p>
          <p className={`para-content ${styles["ital-para-text-bold"]}`}>
            {paragraphs.servicePara2.content}
          </p>
        </div>
      </aside>
      <aside className={`${styles["our-wrapper"]} ${styles["our-mission"]}`}>
        <h2 className="med-heading">{headers.ourMissionHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.ourMissionPara.content}</p>
      </aside>
      <div className={`${styles["home-class-wrapper"]}`}>
        <div className={`${styles["home-class-img-wrapper"]}`}>
          <ExportedImage
            src={imgObj.visionimg}
            width={175}
            height={300}
            alt="home class at Washington Irving"
          />
        </div>
        <div className={styles["separate-line"]}></div>
        <div className={`${styles["our-wrapper"]} ${styles["our-vision"]}`}>
          <h2 className="med-heading ">
            {headers.ourVisionHeading.mainHeading}
          </h2>
          <p>{paragraphs.ourVisionPara1.content}</p>
          <p>{paragraphs.ourVisionPara2.content}</p>
        </div>
      </div>
      <div className={styles["carousel-wrapper"]}>
        <Carousel carousel={carousel} />
      </div>
    </main>
  );
}
