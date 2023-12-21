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
  return (
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={0}
        forwardBtnProps={{
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
          children: <span>{`>`}</span>,
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
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div style={{ width: 300, height: 300, background: "#ff80ed" }}>
          slide 0
        </div>
        <div style={{ width: 300, height: 300, background: "#065535" }}>
          slide 1
        </div>
        <div style={{ width: 300, height: 300, background: "#000000" }}>
          slide 2
        </div>
      </ReactSimplyCarousel>
  )
}

// {carousel &&
//   carousel.map((imgData, index) => {
//     return (
//       <div key={crypto.randomUUID()} className="img-wrapper">
//         <img
//           className="carousel-img"
//           src={imgData.imgUrl}
//           alt={imgData.quoteText || ""}
//         />
//         <p>{imgData.quoteText || ""}</p>
//       </div>
//     );
//   })}