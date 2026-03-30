import React from "react";
import { cn } from "@/lib/utils";

type ButtonOwnProps<E extends React.ElementType = "button"> = {
  as?: E;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: string;
  iconPosition?: "left" | "right";
  loading?: boolean;
  children?: React.ReactNode;
};

type ButtonProps<E extends React.ElementType = "button"> = ButtonOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ButtonOwnProps>;

const variants: Record<string, string> = {
  primary:
    "bg-primary text-on-primary shadow-2xl shadow-primary/20 hover:bg-primary/90",
  secondary:
    "bg-secondary text-on-secondary shadow-2xl shadow-secondary/20 hover:bg-secondary/90",
  outline:
    "border border-white/10 bg-white/5 hover:bg-white/10 text-on-surface",
  ghost: "bg-transparent hover:bg-white/5 text-on-surface",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-[10px] rounded-lg min-h-[36px]",
  md: "px-6 py-3 text-xs rounded-lg min-h-[44px]",
  lg: "px-8 py-5 text-sm rounded-xl min-h-[48px]",
  xl: "px-12 py-7 text-sm rounded-2xl min-h-[64px]",
};

const ButtonInner = <E extends React.ElementType = "button">(
  {
    className,
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "left",
    children,
    loading,
    as,
    ...props
  }: ButtonProps<E>,
  ref: React.Ref<HTMLElement>,
) => {
  const Component = (as || "button") as React.ElementType;

  return (
    <Component
      ref={(ref as React.Ref<HTMLButtonElement>) || undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-headline font-bold uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loading && (
        <span
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
      )}
      {!loading && icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-lg" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {!loading && icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-lg" aria-hidden="true">
          {icon}
        </span>
      )}
    </Component>
  );
};

interface ButtonComponent {
  <E extends React.ElementType = "button">(
    props: ButtonProps<E> & { ref?: React.Ref<HTMLElement> },
  ): React.ReactElement | null;
  displayName?: string;
}

export const Button = React.forwardRef(
  ButtonInner as unknown as React.ForwardRefRenderFunction<
    HTMLButtonElement,
    ButtonProps<"button">
  >,
) as unknown as ButtonComponent;

Button.displayName = "Button";
