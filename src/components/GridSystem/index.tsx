// GridSystem.tsx

import React from "react";
import "./GridSystem.css";

// Define the props for the Col component
interface ColProps {
  md?: string | number;
  lg?: string | number;
  sm?: string | number;
  xl?: string | number;
  xs?: string | number;
  col?: string | number;
  className?: string;
  children: React.ReactNode;
}

// Col Component
export const Col: React.FC<ColProps> = ({
  md,
  lg,
  sm,
  xl,
  xs,
  col,
  children,
  className,
}) => {
  // Construct the class names based on props
  const colClasses = [
    col ? `col-${col}` : "",
    lg ? `col-lg-${lg}` : "",
    md ? `col-md-${md}` : "",
    sm ? `col-sm-${sm}` : "",
    xs ? `col-xs-${xs}` : "",
    xl ? `col-xl-${xl}` : "",
    className ? className : "",
  ]
    .filter(Boolean) // Remove empty strings
    .join(" "); // Join with spaces

  return <div className={colClasses}>{children}</div>;
};

// Define the props for the Row component
interface RowProps {
  children: React.ReactNode;
  className?: string;
  gap?: string | number;
  justify?: string;
}

// Row Component
export const Row: React.FC<RowProps> = ({
  children,
  className,
  gap,
  justify,
}) => {
  // Construct the class names based on props
  const rowClasses = [
    "row",
    gap ? `gap-${gap}` : "",
    justify ? `justify-${justify}` : "",
    className ? className : "",
  ]
    .filter(Boolean) // Remove empty strings
    .join(" "); // Join with spaces

  return <div className={rowClasses}>{children}</div>;
};

// Define the props for the Container component
interface ContainerProps {
  children: React.ReactNode;
}

// Container Component
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="py-5">
      <div className="w-[94%] max-lg:w-full max-sm:w-[98%] mx-auto">
        {children}
      </div>
    </section>
  );
};