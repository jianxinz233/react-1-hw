import styles from "./page.module.css";

const partners = [
  {
    id: 1,
    name: "alphabet",
    imgUrl: "/business_partners/alphabet-logo.png",
  },
  {
    id: 2,
    name: "amazon",
    imgUrl: "/business_partners/amazon_logo.png",
  },
  {
    id: 3,
    name: "cbc",
    imgUrl: "/business_partners/CBC_Logo_White.png",
  },
  {
    id: 4,
    name: "Microsoft",
    imgUrl: "/business_partners/Microsoft-Logo-white.png",
  },
  {
    id: 5,
    name: "nyu",
    imgUrl: "/business_partners/nyu-logo.png",
  },
  {
    id: 6,
    name: "queensuniversity",
    imgUrl: "/business_partners/QueensLogo_white.png",
  },
  {
    id: 7,
    name: "samsung",
    imgUrl: "/business_partners/samsung-logo.png",
  },
  {
    id: 8,
    name: "sodexo",
    imgUrl: "/business_partners/sodexo-logo.png",
  },
];

const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.OurPartners}>
      <div className={styles.partnerDescription}>
        <h2>
          We collaborate with some of the most respected names in the space and
          technology industries to make every journey extraordinary.
        </h2>
      </div>
      <div className={styles.partnersLogos}>
        {partners.map((partner) => (
          <div key={partner.id} className={styles.logoImg}>
            <img
              className={styles.partnerImg}
              src={partner.imgUrl}
              alt={partner.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
