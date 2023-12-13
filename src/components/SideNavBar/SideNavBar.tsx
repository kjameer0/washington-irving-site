"use client"
import MainLogo from "../../../public/WIYABC_Logo_cropped.png";
import { useState } from "react";
import NavLinkList from "@/components/NavLinkList/NavLinkList";
import Link from "next/link";
import DownArrow from "../../../public/down-arrow.svg";
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
    <nav>
      <div className="img-wrapper">
        <Link href="/">
          <img
            className="logo"
            src={MainLogo.src}
            alt="Washington Irving YABC"
          />
        </Link>
      </div>
      <nav>
        <ul className="categories-list">
          <li className="category">
            <Link href={"/"}>HOME</Link>
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value="about">
              ABOUT
              <img src={DownArrow} alt="down arrow" className="down-arrow" />
            </button>
            {activeList === "about" && <NavLinkList list={aboutPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value="staff">
              STAFF
              <img src={DownArrow} className="down-arrow" alt="down arrow" />
            </button>
            {activeList === "staff" && <NavLinkList list={staffPaths} />}
          </li>
          <li className="category">
            <button
              onClick={handleCategoryClick}
              id="admissions-button"
              value={"admissions"}
            >
              ADMISSIONS
              <img
                src={DownArrow}
                alt="down arrow"
                width={"1px"}
                className="down-arrow"
              />
            </button>
            {/* if active list is this item, render its link */}
            {activeList === "admissions" && (
              <NavLinkList list={admissionsPaths} />
            )}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={"student-corner"}>
              STUDENT CORNER
              <img
                src={DownArrow}
                alt="down arrow"
                width={"1px"}
                className="down-arrow"
              />
            </button>
            {activeList === "student-corner" && (
              <NavLinkList list={studentCornerPaths} />
            )}
          </li>
          <li className="category">
            <Link href="/counselor-corner">COUNSELOR&apos;S CORNER</Link>
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={"parents-families"}>
              PARENTS/FAMILIES
              <img
                src={DownArrow}
                alt="down arrow"
                width={"1px"}
                className="down-arrow"
              />
            </button>
            {activeList === "parents-families" && (
              <NavLinkList list={parentsFamiliesPaths} />
            )}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={"teacher-hub"}>
              TEACHER HUB
              <img
                src={DownArrow}
                alt="down arrow"
                width={"1px"}
                className="down-arrow"
              />
            </button>
            {activeList === "teacher-hub" && (
              <NavLinkList list={teacherHubPaths} />
            )}
          </li>
          <li className="category">
            <button
              onClick={handleCategoryClick}
              value={"student-support-activities"}
            >
              STUDENT SUPPORT ACTIVITIES
              <img
                src={DownArrow.src}
                alt="down arrow"
                width={"1px"}
                className="down-arrow"
              />
            </button>
            {activeList === "student-support-activities" && (
              <NavLinkList list={studentSupportPaths} />
            )}
          </li>
          <li className="category">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="mission-logo-container">
        <p className="address-p">
          Washington Irving YABC <br /> 40 Irving Place NY, NY 10003
        </p>
      </div>
    </nav>
  );
}
