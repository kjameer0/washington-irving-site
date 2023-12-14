"use client";
import MainLogo from "../../../public/WIYABC_Logo_cropped.png";
import { useState } from "react";
import NavLinkList from "@/components/NavLinkList/NavLinkList";
import Link from "next/link";
import DownArrow from "../../../public/down-arrow.svg";
import styles from "./side-nav.module.css";
import Image from "next/image";
//data
import {
  aboutPaths,
  staffPaths,
  admissionsPaths,
  studentCornerPaths,
  teacherHubPaths,
  parentsFamiliesPaths,
  studentSupportPaths,
} from "./nav-utils";

export default function SideNavBar() {
  // controls which list of sub anchors is being shown
  const [activeList, setActiveList] = useState("");
  //change active list of links
  function handleCategoryClick(evt: React.MouseEvent<HTMLButtonElement>) {
    //clicking already active list closes the open menu
    if (activeList === evt.currentTarget.value) {
      setActiveList("");
    } else setActiveList(evt.currentTarget.value);
  }

  return (
    <nav className={styles.core}>
      <div className={`${styles["img-wrapper"]}`}>
        <Link href="/">
          <img
            className="logo"
            src={MainLogo.src}
            alt="Washington Irving YABC"
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles["categories-list"]}>
          <li className={styles["category"]}>
            <Link className={`${styles.link} ${styles['category-item']}`} href={"/"}>
              <span>HOME</span>
            </Link>
          </li>
          <li className={styles["category"]}>
            <button className={styles['category-item']} onClick={handleCategoryClick} value="about">
              ABOUT
              <Image
                src={DownArrow}
                alt="down arrow"
                className={styles["down-arrow"]}
              />
            </button>
            {activeList === "about" && <NavLinkList list={aboutPaths} />}
          </li>
          <li className={styles["category"]}>
            <button className={styles['category-item']} onClick={handleCategoryClick} value="staff">
              STAFF
              <Image
                src={DownArrow}
                className={styles["down-arrow"]}
                alt="down arrow"
              />
            </button>
            {activeList === "staff" && <NavLinkList list={staffPaths} />}
          </li>
          <li className={styles["category"]}>
            <button
            className={styles['category-item']}
              onClick={handleCategoryClick}
              id="admissions-button"
              value={"admissions"}
            >
              ADMISSIONS
              <Image
                src={DownArrow}
                alt="down arrow"
                className={styles["down-arrow"]}
              />
            </button>
            {/* if active list is this item, render its link */}
            {activeList === "admissions" && (
              <NavLinkList list={admissionsPaths} />
            )}
          </li>
          <li className={styles["category"]}>
            <button
            className={styles['category-item']} onClick={handleCategoryClick} value={"student-corner"}>
              STUDENT CORNER
              <Image
                src={DownArrow}
                alt="down arrow"
                className={styles["down-arrow"]}
              />
            </button>
            {activeList === "student-corner" && (
              <NavLinkList list={studentCornerPaths} />
            )}
          </li>
          <li className={styles["category"]}>
            <Link className={`${styles.link} ${styles['category-item']}`} href="/counselor-corner">
              <span>COUNSELOR&apos;S CORNER</span>
            </Link>
          </li>
          <li className={styles["category"]}>
            <button
            className={styles['category-item']} onClick={handleCategoryClick} value={"parents-families"}>
              PARENTS/FAMILIES
              <Image
                src={DownArrow}
                alt="down arrow"
                className={styles["down-arrow"]}
              />
            </button>
            {activeList === "parents-families" && (
              <NavLinkList list={parentsFamiliesPaths} />
            )}
          </li>
          <li className={styles["category"]}>
            <button
            className={styles['category-item']} onClick={handleCategoryClick} value={"teacher-hub"}>
              TEACHER HUB
              <Image
                src={DownArrow}
                alt="down arrow"
                className={styles["down-arrow"]}
              />
            </button>
            {activeList === "teacher-hub" && (
              <NavLinkList list={teacherHubPaths} />
            )}
          </li>
          <li className={styles["category"]}>
            <button
            className={styles['category-item']}
              onClick={handleCategoryClick}
              value={"student-support-activities"}

            >
              STUDENT SUPPORT ACTIVITIES
              <Image
                src={DownArrow}
                alt="down arrow"
                className={styles["down-arrow"]}
              />
            </button>
            {activeList === "student-support-activities" && (
              <NavLinkList list={studentSupportPaths} />
            )}
          </li>
          <li className={styles["category"]}>
            <Link className={`${styles.link} ${styles['category-item']}`} href="/contact">
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles["address-container"]}>
        <p className="address-p">
          Washington Irving YABC <br /> 40 Irving Place NY, NY 10003
        </p>
      </div>
    </nav>
  );
}
