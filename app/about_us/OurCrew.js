import styles from "./page.module.css";

const crewMembers = [
  {
    id: 1,
    name: "Captain Sarah Vega",
    imgUrl: "/crew/image-anousheh-ansari.png",
    description:
      "Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.",
  },
  {
    id: 2,
    name: "Dr. Leo Redding",
    imgUrl: "/crew/image-douglas-hurley.png",
    description:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  },
  {
    id: 3,
    name: "Chief Engineer Hana Lee",
    imgUrl: "/crew/image-mark-shuttleworth.png",
    description:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
  },
  {
    id: 4,
    name: "Mission Specialist Alex Santos",
    imgUrl: "/crew/image-victor-glover.png",
    description:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
  },
  {
    id: 5,
    name: "Crew Member Maya Patel",
    imgUrl: "",
    description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  },
];

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.crewContainer}>
      <div className={styles.crewDescription}>
        <h3>Description</h3>
        <p>
          Our crew is the heart and soul of Galactica. We are a diverse team of
          seasoned space explorers, engineers, and visionaries who are united by
          a common goal: to make space travel accessible and exciting for all.
        </p>
      </div>
      <div className={styles.crewMembers}>
        {crewMembers.map((member) => (
          <div key={member.id} className={styles.memberCard}>
            <img
              className={styles.memberImg}
              src={member.imgUrl}
              alt={member.name}
            />
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;
