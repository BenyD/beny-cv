import React from "react";
import Link from "next/link";

const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isInternalLink = href && href.startsWith("#");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInternalLink) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isInternalLink) {
    return (
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return <Link href={href}>{children}</Link>;
};

export default CustomLink;
