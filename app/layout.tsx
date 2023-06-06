import { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Refine UI",
  description: "Refine UI is a React UI library built on top of Chakra UI.",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
