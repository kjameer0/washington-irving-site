//components
import {
  getSinglePageData,
  generateSectionsObject,
  sectionObjType,
  getStaffMembers,
} from "@/lib/contentful-api";
import StaffImage from "@/components/StaffImage/StaffImage";
import styles from "./page.module.css";

export default async function Staff() {
  const pageData = await getSinglePageData("4PVhqvB90jCz42mULpBZeC");
  const staffObj = await getStaffMembers();
  if (!pageData || !staffObj) {
    throw new Error("no pageData");
  }

  const { headers } = generateSectionsObject(pageData) as sectionObjType;

  return (
    <main className="staff-main">
      <h1 className="major-heading" id="administrators">
        {headers.pageTitle.mainHeading}
      </h1>
      <section className={styles["staff-section"]}>
        <div className={styles["staff-flex-wrapper"]}>
          {staffObj.admin.map((admin, index) => {
            return (
              <StaffImage
                key={admin.name}
                name={admin.name.toUpperCase()}
                role={admin.role || ""}
                imgUrl={admin.imgUrl}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </section>
      <section className={styles["staff-section"]} id="school-counselors">
        <div className={styles["white-line-long"]}></div>
        <h2 className={"major-heading" + " " + styles["counselor-heading"]}>
          {headers.schoolCounselorHeading.mainHeading}
        </h2>
        <div className={styles["white-line-short"]}></div>
        <div className={styles["staff-flex-wrapper"]}>
          {staffObj.counselor.map((counselor, index) => {
            return (
              <StaffImage
                key={counselor.name}
                name={counselor.name.toUpperCase()}
                role={counselor.role || ""}
                imgUrl={counselor.imgUrl}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </section>
      <section
        className={styles["staff-section"]}
        id="mission-society-of-new-york"
      >
        <div className={styles["white-line-long"]}></div>
        <h2 className={"major-heading" + " " + styles["counselor-heading"]}>
          {headers.missionSocietyHeading.mainHeading}
        </h2>
        <div className={styles["white-line-short"]}></div>
        <div className={styles["staff-flex-wrapper"]}>
          {staffObj.missionSociety.map((staff, index) => {
            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ""}
                imgUrl={staff.imgUrl}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </section>
      <section className={styles["staff-section"]} id="staff-faculty">
        <div className={styles["white-line-long"]}></div>
        <h2 className={"major-heading" + " " + styles["counselor-heading"]}>
          {headers.facultyHeading.mainHeading}
        </h2>
        <div className={styles["white-line-short"]}></div>
        <div className={styles["staff-flex-wrapper"]}>
          {staffObj.faculty.map((staff, index) => {
            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ""}
                imgUrl={staff.imgUrl}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </section>
      <section className={styles["staff-section"]} id="support-staff">
        <div className={styles["white-line-long"]}></div>
        <h2 className={"major-heading" + " " + styles["counselor-heading"]}>
          {headers.supportHeading.mainHeading}
        </h2>
        <div className={styles["white-line-short"]}></div>
        <div className={styles["staff-flex-wrapper"]}>
          {staffObj.support.map((staff, index) => {
            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ""}
                imgUrl={staff.imgUrl}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
