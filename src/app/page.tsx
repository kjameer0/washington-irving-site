import Image from "next/image";
import styles from "./page.module.css";
import SideNavBar from "@/components/SideNavBar/SideNavBar";
export default function Home() {
  return (
    <div>
    <h1>HOME</h1>
    <p>This is a sample HTML document.</p>
    <p>You can modify and customize it to create your own web pages.</p>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
    <p>Feel free to explore and learn!</p>
</div>

  );
}
