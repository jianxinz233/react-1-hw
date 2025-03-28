import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.css";

export default function NavItem(props) {
  const { id, title, link, isActive } = props;
  const currentPath = usePathname();
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: link === currentPath,
      })}
    >
      <Link href={link}>
        <b>{"0" + id}</b> {title}
      </Link>
    </li>
  );
}
