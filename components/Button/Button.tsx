import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`font-medium min-w-2 px-2 py-3 rounded-xs border-primary ${
        props.variant === "secondary"
          ? "text-primary bg-white border-2"
          : "text-white bg-primary"
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
