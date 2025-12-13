import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "St. Aidan's Church - Mockup 2",
  description: "Modern, Responsive, Mission-Focused Web Presence",
};

export default function Mockup2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
