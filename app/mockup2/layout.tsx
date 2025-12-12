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
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      {children}
    </>
  );
}
