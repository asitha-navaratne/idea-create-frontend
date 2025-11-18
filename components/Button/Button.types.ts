import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type { ButtonProps };
