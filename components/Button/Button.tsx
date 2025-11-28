import styles from "./Button.module.css";

import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`font-medium min-w-30 px-lg py-xs rounded-3xl border-primary border-3 duration-300 cursor-pointer ${
        props.variant === "secondary"
          ? styles["button-secondary"]
          : styles["button-primary"]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
