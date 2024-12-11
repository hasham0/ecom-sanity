import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio",
  description: "Control Headless CMS",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
