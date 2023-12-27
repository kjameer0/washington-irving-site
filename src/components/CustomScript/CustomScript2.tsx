'use client'
import { useEffect } from "react"
import { redirect } from "next/navigation";
export default function CustomScript2() {
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

}, [])
return <script></script>
}
