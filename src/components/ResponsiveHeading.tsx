import React from "react";

interface ResponsiveHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  textAlign?: "left" | "center" | "right";
  whiteText?: boolean;
  mixedContent?: boolean;
}

const ResponsiveHeading: React.FC<ResponsiveHeadingProps> = ({
  children,
  level = 2,
  size = "lg",
  className = "",
  textAlign = "center",
  whiteText = false,
  mixedContent = false,
}) => {
  // Size mappings for different responsive breakpoints (including xs)
  const sizeClasses = {
    xs: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
    sm: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
    md: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
    lg: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
    xl: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
  };

  const textAlignClass = `text-${textAlign}`;

  const baseClasses = `${sizeClasses[size]} ${textAlignClass} font-bold text-white leading-tight ${className}`;

  const gradientStyle = whiteText
    ? {
        color: "white",
        paddingBottom: "0.1em", // Add small padding for descenders
        display: "inline-block", // Ensures proper spacing
      }
    : mixedContent
    ? {
        paddingBottom: "0.1em", // Add small padding for descenders
        display: "inline-block", // Ensures proper spacing
      }
    : {
        background:
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
        paddingBottom: "0.1em", // Add small padding for descenders
        display: "inline-block", // Ensures proper spacing
      };

  // Dynamically create the heading element based on level
  const HeadingTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return React.createElement(
    HeadingTag,
    { className: baseClasses, style: gradientStyle },
    children
  );
};

export default ResponsiveHeading;
