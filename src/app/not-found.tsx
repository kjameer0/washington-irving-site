"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
export default function NotFound() {
  const pages = new Set([
    "about",
    "admissions",
    "contact",
    "counselor-contact-form",
    "parents-families",
    "shared-admissions",
    "site-administrator-contact-form",
    "staff-directory",
    "student-corner",
    "student-support-activities",
    "teacher-hub",
  ]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.location.pathname);
      console.log(pages.has(window.location.pathname.slice(1)))
      if (!pages.has(window.location.pathname.slice(1))) {
          console.log(window.location.host);
          redirect("/");
      } else {
        console.log(window.location.hash)
          let hash = window.location.hash;
          redirect(window.location.pathname + ".html" + hash);
      }
    }
  }, []);
  return (
    <div style={{ position: "absolute", top: "100px", right: "400px" }}>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/about">all posts</Link>
        View <Link href="/student-support-activities">all posts</Link>
        View <Link href="/about">all posts</Link>
      </p>
    </div>
  );
}
