import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function RoverPhoto({ src, date, roverName }) {
  return (
    <div>
      <p>{roverName}</p>
      <p>Date {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt={roverName} />
    </div>
  );
}
