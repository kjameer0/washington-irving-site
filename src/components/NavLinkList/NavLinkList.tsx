import Link from "next/link";
import styles from './NavLinkList.module.css'
import { NavListItemType } from "../SideNavBar/nav-utils";
export default function NavLinkList({ list }: {list: NavListItemType[]} ) {
  return (
    <ul>
      {list.map((anchor) => {
        return (
          <li key={anchor.path} className={styles["nav-anchor"]}>
            <Link
             href={anchor.path}
            className={styles['link-button']}
            >
              {anchor.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
