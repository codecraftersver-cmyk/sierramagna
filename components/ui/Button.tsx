import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-sm-red text-sm-white hover:bg-sm-red-dark shadow-[0_10px_30px_rgba(193,18,31,0.25)] hover:shadow-[0_14px_34px_rgba(193,18,31,0.32)]",
  ghost: "bg-transparent text-sm-white hover:text-sm-red",
  outline:
    "border border-sm-border bg-transparent text-sm-white hover:border-sm-red hover:text-sm-red",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 px-8 py-3.5",
    "font-sans text-sm font-semibold tracking-[0.08em] uppercase",
    "transition-all duration-200 ease-out",
    "hover:-translate-y-px active:translate-y-0",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sm-red focus-visible:ring-offset-2 focus-visible:ring-offset-sm-black",
    variants[variant],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
