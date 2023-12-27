import Link from "next/link";
import styles from './NavLinkList.module.css'
import { NavListItemType } from "../MobileNavBar/utils-NavBar";
export default function NavLinkList({ list }: {list: NavListItemType[]} ) {
  return (
    <ul>
      {list.map((anchor) => {
        return (
          <li key={anchor.path} className={styles["nav-anchor"]}>
            <Link
             href={anchor.path}
            className={styles['link-button']}
            prefetch={true}
            >
              {anchor.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
