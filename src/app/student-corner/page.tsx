import styles from "./page.module.css";
import Carousel from "@/components/Carousel/Carousel";
import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
  getSinglePageData,
  getSingleCarousel
} from "@/lib/contentful-api";

export default async function StudentCorner() {
  const pageData = await getSinglePageData("4uRsZsFnHcwcxbOW543PiU");
  const carousel = await getSingleCarousel("2hYFrTntqingK54ljvb2yZ")
  if (!pageData) {
    throw new Error("no pageData");
  }
  const imgObj = generateImageObject(pageData) as Record<string, string>;
  const { paragraphs, headers, buttons, lists, links } = generateSectionsObject(
    pageData
  ) as sectionObjType;
  return (
    <main className={styles.core} id="student-corner">
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <div className={styles["reminder-wrapper"]}>
        <section className={styles["learning-section"]} id="learning-tips">
          <h2 className="sub-heading">{headers.learningHeading.mainHeading}</h2>
          <img
            src={imgObj.learningtips}
            alt="remote learning tips for students"
          />
        </section>
      </div>
      <div className={styles["a-wrapper"]}>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          href={buttons.infoFormButton.link}
        >
          <p>{buttons.infoFormButton.buttonText}</p>
        </a>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          href={buttons.counselorButton.link}
        >
          <p>{buttons.counselorButton.buttonText}</p>
        </a>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          href={buttons.adminButton.link}
        >
          <p>{buttons.adminButton.buttonText}</p>
        </a>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          href={buttons.attendButton.link}
        >
          <p>{buttons.attendButton.buttonText}</p>
        </a>
      </div>
      <div className="green-separator"></div>
      <section
        className={styles["student-resources"]}
        id="student-resources"
      >
        <h2 className="major-heading">{headers.resourceHeading.mainHeading}</h2>
        <div className={styles["resources-icon-wrapper"]}>
          <img src={imgObj.carriageimg} alt="baby carriage" />
          <a
            href={buttons.lyfeButton.link}
            target="_blank"
            className={"navlink" + " " + styles["resources-icon-a"]}
            rel={"noreferrer"}
          >
            <div className={styles["icon-button-text"]}>
              {buttons.lyfeButton.buttonText}
            </div>
          </a>
        </div>
        <div className={styles["resources-icon-wrapper"]}>
          <img src={imgObj.voteimg} alt="vote icon" />
          <a
            href={buttons.voteButton.link}
            className={"navlink" + " " + styles["resources-icon-a"]}
            target="_blank"
            rel={"noreferrer"}
          >
            <p className={styles["icon-button-text"]}>{buttons.voteButton.buttonText}</p>
          </a>
        </div>
      </section>
      <div className={styles["green-separator"]}></div>
      <section className={styles["whats-happening"]} id="whats-happening">
        <h1 className="major-heading">
          {headers.happeningHeading.mainHeading}
        </h1>
        <p className="para-content">{paragraphs.updatePara.content}</p>
        <div className={styles["carousel-wrapper"] + " " + "student-carousel-wrapper"}>
          <Carousel carousel={carousel} />
        </div>
      </section>
      <section
        id="school-library"
        className={styles["school-library-section"]}
      >
        <h1 className="major-heading">{headers.libraryHeading.mainHeading}</h1>
        <img
          className={styles["bookshelf-img"]}
          src={imgObj.shelfimg}
          alt="a library book shelf"
        />
        <h3 className={`sub-heading ${styles["library-heading"]}`}>
          {headers.librarianHeading.mainHeading} <br />{" "}
          {headers.librarianHeading.subHeading}
        </h3>
        <p className="para-content">{paragraphs.libraryPara.content}</p>
        <a
          href={buttons.digitalButton.link}
          target="_blank"
          rel="noreferrer"
          className="navlink"
        >
          {buttons.digitalButton.buttonText}
        </a>
        <img
          className={styles["handbook-img"]}
          src={imgObj.handbookimg}
          alt='a book that has the words "student handbook" written on it'
        />
        <h3 className={`${styles["library-heading"]} sub-heading`}>
          {headers.communityHeading.mainHeading}
        </h3>
        <p className="para-content">{paragraphs.quotePara.content}</p>
        <p className="para-content">{paragraphs.familyPara.content}</p>
        <a
          className="navlink"
          href={"https://" + buttons.handbookButton.file}
          download={"student-handbook"}
          target="_blank"
          rel="noreferrer"
        >
          {buttons.handbookButton.buttonText}
        </a>
        <a
          className="navlink"
          href={buttons.jupiterButton.link}
          target="_blank"
          rel="noreferrer"
        >
          {buttons.jupiterButton.buttonText}
        </a>
      </section>
    </main>
  );
}
