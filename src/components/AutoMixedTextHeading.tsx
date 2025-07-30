"use client";

import React, { useRef, useEffect, useState } from "react";

interface AutoMixedTextHeadingProps {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  textAlign?: "left" | "center" | "right";
}

const AutoMixedTextHeading: React.FC<AutoMixedTextHeadingProps> = ({
  children,
  level = 2,
  size = "lg",
  className = "",
  textAlign = "center",
}) => {
  const [firstLine, setFirstLine] = useState("");
  const [restOfText, setRestOfText] = useState("");
  const textRef = useRef<HTMLElement>(null);

  // Size mappings for different responsive breakpoints (including xs)
  const sizeClasses = {
    xs: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
    sm: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
    md: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
    lg: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
    xl: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
  };

  const textAlignClass = `text-${textAlign}`;
  const baseClasses = `${sizeClasses[size]} ${textAlignClass} font-bold leading-tight mx-auto ${className}`;

  useEffect(() => {
    const calculateLineBreak = () => {
      if (!textRef.current) return;

      // Create a temporary element to measure text
      const temp = document.createElement("span");
      temp.style.visibility = "hidden";
      temp.style.position = "absolute";
      temp.style.whiteSpace = "nowrap";
      temp.className = textRef.current.className;
      document.body.appendChild(temp);

      const containerWidth = textRef.current.offsetWidth;
      const words = children.split(" ");
      let firstLineText = "";
      let i = 0;

      // Find where the first line breaks
      while (i < words.length) {
        const testText = firstLineText + (firstLineText ? " " : "") + words[i];
        temp.textContent = testText;

        if (temp.offsetWidth > containerWidth && firstLineText) {
          break;
        }

        firstLineText = testText;
        i++;
      }

      const remainingText = words.slice(i).join(" ");

      setFirstLine(firstLineText);
      setRestOfText(remainingText);

      document.body.removeChild(temp);
    };

    // Small delay to ensure proper rendering
    const timeoutId = setTimeout(calculateLineBreak, 10);

    // Recalculate on window resize with debounce
    const handleResize = () => {
      clearTimeout(timeoutId);
      setTimeout(calculateLineBreak, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [children]);

  const containerStyle = {
    paddingBottom: "0.1em",
    display: "block",
    width: "100%",
    maxWidth: "fit-content",
  };

  const whiteTextStyle = {
    color: "white",
    display: "block",
  };

  const gradientTextStyle = {
    background:
      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
    display: "block",
  };

  // Dynamically create the heading element based on level
  const HeadingTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return React.createElement(
    HeadingTag,
    {
      ref: textRef,
      className: baseClasses,
      style: containerStyle,
    },
    [
      React.createElement(
        "span",
        { key: "white", style: whiteTextStyle },
        firstLine
      ),
      restOfText &&
        React.createElement(
          "span",
          { key: "gradient", style: gradientTextStyle },
          restOfText
        ),
    ]
  );
};

export default AutoMixedTextHeading;

// Usage Example:
/*
<AutoMixedTextHeading size="sm">
  In a world where gas is weaponized, yield is a battlefield, and chains fracture under greed, only one remains sharp enough to cut through the noise…
</AutoMixedTextHeading>
*/
