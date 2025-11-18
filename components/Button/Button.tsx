import styles from "./Button.module.scss";

import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${styles["button"]} ${
        styles[`button--${props.variant || "primary"}`]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
