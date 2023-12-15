import { useState,useEffect, useRef } from "react";
//components
import NavLinkList from "@/components/NavLinkList/NavLinkList";
import Link from "next/link";
//data
import {
  aboutPaths,
  staffPaths,
  admissionsPaths,
  studentCornerPaths,
  teacherHubPaths,
  parentsFamiliesPaths,
  studentSupportPaths,
  DrawerProps,
} from "@/components/MobileNavBar/utils-NavBar";
//styles
import styles from './drawer.module.css'
//Notice: There are two types of clickables here:
//links that navigate to url
//buttons that open sub menus
export default function Drawer({ open, setOpen }: DrawerProps) {
  const [activeList, setActiveList] = useState("");
  const animationRef = useRef(null);
  function handleCategoryClick(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.stopPropagation();
    if (activeList === evt.currentTarget.value) {
      setActiveList("");
    } else setActiveList(evt.currentTarget.value);
  }

  console.count()
  return (
    <nav ref={animationRef} className={`${styles['core']} ${open === 'none'? '' : styles[open]}`}>
      <ul className={styles["categories-list"]}>
        <li className={styles["category"]}>
          <Link href={"/"}>HOME</Link>
        </li>
        <li className={styles["category"]}>
          <button onClick={handleCategoryClick} value="about">
            ABOUT
          </button>
          {activeList === "about" && <NavLinkList list={aboutPaths} />}
        </li>
        <li className={styles["category"]}>
          <button onClick={handleCategoryClick} value="staff">
            STAFF
          </button>
          {activeList === "staff" && <NavLinkList list={staffPaths} />}
        </li>
        <li className={styles["category"]}>
          <button
            onClick={handleCategoryClick}
            id="admissions-button"
            value={"admissions"}
          >
            ADMISSIONS
          </button>
          {activeList === "admissions" && (
            <NavLinkList list={admissionsPaths} />
          )}
        </li>
        <li className={styles["category"]}>
          <button onClick={handleCategoryClick} value={"student-corner"}>
            STUDENT CORNER
          </button>
          {activeList === "student-corner" && (
            <NavLinkList list={studentCornerPaths} />
          )}
        </li>
        <li className={styles["category"]}>
          <Link
            href={"/contact"}
          >
            COUNSELOR&apos;s CORNER
          </Link>
        </li>
        <li className={styles["category"]}>
          <button onClick={handleCategoryClick} value={"parents-families"}>
            PARENTS/FAMILIES
          </button>
          {activeList === "parents-families" && (
            <NavLinkList list={parentsFamiliesPaths} />
          )}
        </li>
        <li className={styles["category"]}>
          <button onClick={handleCategoryClick} value={"teacher-hub"}>
            TEACHER HUB
          </button>
          {activeList === "teacher-hub" && (
            <NavLinkList list={teacherHubPaths} />
          )}
        </li>
        <li className={styles["category"]}>
          <button
            onClick={handleCategoryClick}
            value={"student-support-activities"}
          >
            STUDENT SUPPORT ACTIVITIES
          </button>
          {activeList === "student-support-activities" && (
            <NavLinkList list={studentSupportPaths} />
          )}
        </li>
        <li className={styles["category"]}>
          <Link
            href={"/contact"}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
