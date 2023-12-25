"use client";
import { ReactNode } from "react";
import styles from "./main-button.module.css";

export default function MainButton({ children }: { children: ReactNode }) {
  return <button className={styles.core}>{children}</button>;
}
