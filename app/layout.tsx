import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restocks — Trucking compliance, without the paperwork",
  description:
    "Restocks automates FMCSA compliance for U.S. motor carriers: pre-employment driver screening, Drug & Alcohol Clearinghouse, CSA monitoring, and driver safety notifications.",
  metadataBase: new URL("https://restocks.ai"),
  openGraph: {
    title: "Restocks — Trucking compliance, without the paperwork",
    description:
      "Pre-employment driver screening, FMCSA Drug & Alcohol Clearinghouse queries, CSA monitoring, and driver safety notifications for U.S. motor carriers.",
    url: "https://restocks.ai",
    siteName: "Restocks",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800&family=Caveat:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
