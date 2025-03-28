import React from "react";
import styles from "@/components/destination/destination.module.css";

export default function PlanetCard(props) {
  const {
    name,
    description,
    thumbnail,
    isPlanetSelected,
    onAddOrRemovePlanet,
    index,
  } = props;
  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        src={"/destination/" + thumbnail}
        alt={name}
      />
      <div className={styles.planetDescription}>
        <h2>
          {name} {isPlanetSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => onAddOrRemovePlanet(name, index)}
      >
        {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
}
