'use client'
import { useState, useEffect } from "react";
//components
import { Drawer } from "@/components/Drawer";
//mui components
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
//images
import MainLogo from "/public/WIYABC_Logo_cropped.png";
//utils
import { OpenOptions, handleDrawerSwitch } from "./utils-NavBar";
import styles from "./mobile-nav.module.css";

export default function MobileNavBar() {
  const [open, setOpen] = useState<OpenOptions>("none");
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // the nav bar should disappear when scrolling
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentYPos = window.scrollY;
      if (currentYPos < 120) setShow(true);
      else if (currentYPos > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(currentYPos);
    }
  };
  useEffect(() => {
    //add scroll to disappear nav bar event to window
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  useEffect(() => {
    //a click anywhere on screen dismisses drawer
    window.addEventListener(
      "click",
      function clickOff() {
        //make sure a click anywhere on the window shuts the drawer
        if (open !== "none") setOpen("close");
        //prevent the same event from being added to event listeners
        window.removeEventListener("click", clickOff, false);
      },
      false
    );
  }, [open]);
  //NavList activePage prop grabs the first part of URL pathname and
  //passes it to NavList
  return (
    <nav
      className={`${styles["core"]} ${
        show ? styles["show-bar"] : styles["dont-show-bar"]
      }`}
    >
      <img className={styles["logo"]} src={MainLogo.src} alt="YABC Washington Irving" />
      <IconButton
        onClick={(e) => handleDrawerSwitch(e, open, setOpen)}
        className={styles["hamburger"]}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} setOpen={setOpen} />
    </nav>
  );
}
