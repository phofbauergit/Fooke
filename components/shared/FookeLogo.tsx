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
      width={160}
      height={48}
      priority
      className={`h-7 w-auto sm:h-8 ${variant === "on-light" ? "fooke-logo-brand" : ""} ${className}`.trim()}
    />
  );
}
