"use client";
import ReactSimplyCarousel from "react-simply-carousel";
import { useState } from "react";
import styles from "./carousel.module.css";
export default function Carousel({
  carousel,
}: {
  carousel:
    | {
        imgUrl: string;
        quoteText: string;
      }[]
    | undefined;
}) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  console.log(activeSlideIndex)
  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: {
          alignSelf: "center",
          background: "blue",
          border: "none",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          fontSize: "20px",
          height: 30,
          lineHeight: 1,
          textAlign: "center",
          width: 30,
        },
        children: <span key={crypto.randomUUID()}>{`>`}</span>,
      }}
      backwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: {
          alignSelf: "center",
          background: "black",
          border: "none",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          fontSize: "20px",
          height: 30,
          lineHeight: 1,
          textAlign: "center",
          width: 30,
        },
        children: <span>{`<`}</span>,
      }}
      responsiveProps={[
        {
          minWidth: 700,
        },
      ]}
      speed={200}
      easing="linear"
    >
      {carousel &&
        carousel.map((imgData, index) => {
          return (
            <div key={crypto.randomUUID()} className={styles["core"]}>
              <img
                // className={styles["core"]}
                src={imgData.imgUrl}
                alt={imgData.quoteText || ""}
              />
              <p>{imgData.quoteText || ""}</p>
            </div>
          );
        })}
    </ReactSimplyCarousel>
  );
}
