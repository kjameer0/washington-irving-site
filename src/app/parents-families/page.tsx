import styles from "./page.module.css";

import {
  generateSectionsObject,
  generateImageObject,
  sectionObjType,
  getSinglePageData,
} from "@/lib/contentful-api";

export default async function Parents() {
  const pageData = await getSinglePageData("4PFJseAKeaXR0SerpDod02");
  if (!pageData) {
    throw new Error("no pageData");
  }
  const imgObj = generateImageObject(pageData) as Record<string, string>;
  const { paragraphs, headers, buttons, lists, links } = generateSectionsObject(
    pageData
  ) as sectionObjType;

  return (
    <main className={styles.core} id="parents-page">
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <section id="tips-for-parents">
        <h2 className="sub-heading">{headers.tipsHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.understandPara.content} </p>
        <ol>
          {lists.tipsList.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ol>
      </section>
      <section id="your-involvement">
        <h2 className="major-heading">
          {headers.involvementHeading.mainHeading}
        </h2>
        <p className={`para-content ${styles["bold-para"]}`}>
          {paragraphs.helpPara.content}
        </p>
        <p className="para-content">{paragraphs.guidancePara.content}</p>
        <div className={styles["involvement-button-wrapper"]}>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href={buttons.contactButton.link}
          >
            <p>{buttons.contactButton.buttonText}</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href={buttons.adminButton.link}
          >
            <p>{buttons.adminButton.buttonText}</p>
          </a>
        </div>
      </section>
      <section className={styles["parents-night"]} id="parents-night">
        <h2 className="sub-heading">{headers.nightHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.parentNightDatePara.content}</p>
        <img
          src={imgObj.parentsnightimg}
          alt="parents at YABC parent's night"
        />
      </section>
      <section id="family-resources">
        <h2 className="major-heading">FAMILY RESOURCES</h2>
        <div className={styles["resources-flex-container"]}>
          <div className={styles["resources-icon-wrapper"]}>
            <img
              src={imgObj.mealsimg}
              alt="spoon fork icon"
              className={styles["resource-icon"]}
            />
            <a
              href={buttons.mealsButton.link}
              className={`${styles["icon-button-text"]} navlink`}
              target="_blank"
              rel={"noreferrer"}
            >
              <p>{buttons.mealsButton.buttonText}</p>
            </a>
          </div>
          <div className={styles["resources-icon-wrapper"]}>
            <img
              src={imgObj.mentalimg}
              alt="outline of human head with heart in it"
              className={styles["resource-icon"]}
            />
            <a
              href={buttons.mentalButton.link}
              className={`${styles["icon-button-text"]} navlink`}
              target="_blank"
              rel={"noreferrer"}
            >
              <p>{buttons.mentalButton.buttonText}</p>
            </a>
          </div>
          <div className={styles["resources-icon-wrapper"]}>
            <img
              src={imgObj.healthimg}
              alt="heart icon with a plus sign in it"
              className={styles["resource-icon"]}
            />
            <a
              href={buttons.empowermentButton.link}
              className={`${styles["icon-button-text"]} navlink`}
              target="_blank"
              rel={"noreferrer"}
            >
              <p>{buttons.empowermentButton.buttonText}</p>
            </a>
          </div>
          <div className={styles["resources-icon-wrapper"]}>
            <img
              src={imgObj.childrenimg}
              alt="children being held up by hands"
              className={styles["resource-icon"]}
            />
            <a
              href={buttons.childrenButton.link}
              className={`${styles["icon-button-text"]} navlink`}
              target="_blank"
              rel={"noreferrer"}
            >
              <p>{buttons.childrenButton.buttonText}</p>
            </a>
          </div>
          <div className={styles["resources-icon-wrapper"]}>
            <img
              src={imgObj.voteimg}
              alt="vote icon"
              className={styles["resource-icon"]}
            />
            <a
              href={buttons.voteButton.link}
              className={`${styles["icon-button-text"]} navlink`}
              target="_blank"
              rel={"noreferrer"}
            >
              <p>{buttons.voteButton.buttonText}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
