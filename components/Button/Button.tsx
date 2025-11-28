import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`font-medium min-w-30 px-lg py-xs rounded-3xl border-primary border-3 cursor-pointer ${
        props.variant === "secondary"
          ? "bg-white text-primary"
          : "bg-primary text-white"
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
