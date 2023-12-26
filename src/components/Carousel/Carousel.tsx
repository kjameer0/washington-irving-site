"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState, useEffect } from "react";
import styles from "./carousel.module.css";

export const CarouselStyles = {
  minHeight: "230px",
  width: "inherit",
};
export const CarouselImgStyles = {
  maxWidth: "280px",
  border: "3px solid white",
  marginBottom: "50px",
  height: "auto",
};

export default function CarouselFactory({
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
    <Carousel
      showStatus={false}
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      transitionTime={0}
      selectedItem={activeSlideIndex}
      onChange={(idx) => setActiveSlideIndex(idx)}
    >
      {carousel &&
        carousel.map((imgData, index) => {
          return (
            <div
              key={crypto.randomUUID()}
              className={styles["core"]}
              style={CarouselStyles}
            >
              <img
                style={CarouselImgStyles}
                src={imgData.imgUrl}
                alt={imgData.quoteText || ""}
                key={crypto.randomUUID()}
              />
              <p>{imgData.quoteText || ""}</p>
            </div>
          );
        })}
    </Carousel>
  );
}
