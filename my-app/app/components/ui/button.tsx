import React from "react";
import { cn } from "../../utils/cn"; // Utility for conditionally combining classes

type ButtonProps<C extends React.ElementType> = {
  as?: C; // Polymorphic 'as' prop
} & React.ComponentPropsWithoutRef<C> & {
    className?: string;
  };

export const Button = <C extends React.ElementType = "button">({
  as,
  className,
  children,
  ...props
}: ButtonProps<C>) => {
  const Component = as || "button"; // Default to 'button' if 'as' is not provided
  return (
    <Component
      className={cn(
        "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
