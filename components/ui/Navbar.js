"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavItem from "./NavItem";

import styles from "./Navbar.module.css";

const navbarItems = [
  {
    id: 1,
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    id: 2,
    title: "DESTINATION",
    link: "/destination",
  },
  {
    id: 3,
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {/* TASK - React 1 week 2 */}
          {/* Create a <NavItem> component, which accepts the following:  */}
          {/* title, link, isActive  */}
          {navbarItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              title={item.title}
              link={item.link}
            />
          ))}
          {/* <li
            className={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[0].link === currentPath,
            })}
          >
            <Link href={navbarItems[0].link}>
              <b>01</b> {navbarItems[0].title}
            </Link>
          </li>
          <li
            className={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[1].link === currentPath,
            })}
          >
            <Link href={navbarItems[1].link}>
              <b>02</b> {navbarItems[1].title}
            </Link>
          </li>
          <li
            className={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[2].link === currentPath,
            })}
          >
            <Link href={navbarItems[2].link}>
              <b>03</b> NASA COLLABORATION
            </Link>
          </li> */}
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
};
