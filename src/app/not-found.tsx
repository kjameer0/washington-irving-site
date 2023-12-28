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
      let path = window.location.pathname;
      if (path[path.length - 1] === "/") {
        path = path.slice(0, -1);
      }
      if (!pages.has(path.slice(1))) {
        redirect("/");
      } else {
        let hash = window.location.hash;
        redirect(path + ".html" + hash);
      }
    }
  }, []);
  return (
    <main className="">
      <p>Could not find the page you&apos;re looking for.</p>
      <Link href="/">Head back to the main page</Link>
    </main>
  );
}
