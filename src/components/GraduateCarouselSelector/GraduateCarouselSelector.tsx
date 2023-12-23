"use client";
import Carousel from "../Carousel/Carousel";
import styles from "./graduate-carousel-selector.module.css";
import { useState } from "react";
type GraduateCarouselSelectorPropType = {
  mostRecentYear: number;
  carousels: ({ imgUrl: string; quoteText: string }[] | undefined)[];
};
export default function GraduateCarouselSelector({
  mostRecentYear,
  carousels,
}: GraduateCarouselSelectorPropType) {
  const [currentYear, setCurrentYear] = useState(mostRecentYear);
  const yearsList = [mostRecentYear - 2, mostRecentYear - 1, mostRecentYear];

  return (
    <div className={styles.core}>
      <Carousel key={yearsList.indexOf(currentYear)} carousel={carousels[yearsList.indexOf(currentYear)]} />
      <select
        onChange={(e) => {
          setCurrentYear(Number(e.target.value));
        }}
        className="year-select"
        value={currentYear}
      >
        {yearsList.map((year: number) => (
          <option
            key={crypto.randomUUID()}
            className="year-option"
            value={year.toString()}
          >
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
