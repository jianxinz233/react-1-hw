import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function SocialMediaItem(props) {
  const { title, url, icon } = props;
  return (
    <li>
      <div className={styles.mediaItem}>
        <img className={styles.icon} src={icon} alt={title} />
        <a href={url}>{title}</a>
        {/* TASK - React 1 week 2 */}
        {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
        {/* it should accept the following props */}
        {/* url, title, icon */}
        {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
      </div>
    </li>
  );
}
