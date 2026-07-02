import Image from "next/image";
import { brand } from "@/lib/content";

type FookeLogoProps = {
  /** White logo for dark backgrounds (Noir). Brand-blue tint on light backgrounds. */
  variant?: "on-light" | "on-dark";
  className?: string;
};

export function FookeLogo({ variant = "on-light", className = "" }: FookeLogoProps) {
  return (
    <Image
      src={brand.logo}
      alt={brand.logoAlt}
      width={251}
      height={113}
      priority
      className={`h-11 w-auto sm:h-14 md:h-16 ${variant === "on-light" ? "fooke-logo-brand" : ""} ${className}`.trim()}
    />
  );
}
