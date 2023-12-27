"use client";
import { useEffect } from "react";
export default function CustomScript() {
  console.log('hi')
  useEffect(() => {
    if (typeof window !== "undefined") {
      let pathSegmentsToKeep = 0;
      let l = window.location;
      l.replace(
        l.protocol +
          "//" +
          l.hostname +
          (l.port ? ":" + l.port : "") +
          l.pathname
            .split("/")
            .slice(0, 1 + pathSegmentsToKeep)
            .join("/") +
          "/?/" +
          l.pathname
            .slice(1)
            .split("/")
            .slice(pathSegmentsToKeep)
            .join("/")
            .replace(/&/g, "~and~") +
          (l.search ? "&" + l.search.slice(1).replace(/&/g, "~and~") : "") +
          l.hash
      );
    }
  }, []);
  return <script></script>;
}
