"use client";
import { useEffect } from "react";
export default function CustomScript() {
  useEffect(() => {
    (() => {
      console.log(typeof window);
      if (typeof window !== "undefined") {
        let l = window.location;
        if (l.search[1] === "/") {
          let decoded = l.search
            .slice(1)
            .split("&")
            .map(function (s) {
              return s.replace(/~and~/g, "&");
            })
            .join("?");
          window.history.replaceState(
            null,
            "",
            l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
        console.log("complete");
      }
    })();
    let pathSegmentsToKeep = 0;
      let l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
  }, []);
  return <script></script>;
}
