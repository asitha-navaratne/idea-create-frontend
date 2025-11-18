import Image from "next/image";

import logo from "@/public/images/logo.png";

import styles from "./Header.module.scss";

import Button from "../Button";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo-container"]}>
        <Image src={logo} sizes="300px" fill alt="IdeaCreate Logo" />
      </div>
      <div className={styles["header__button-container"]}>
        <Button variant="secondary">Sign up</Button>
        <Button>Log in</Button>
      </div>
    </header>
  );
};

export default Header;
